import { useState, useEffect } from 'react';
import { Story } from '@/data/socialData';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { formatDistanceToNow } from 'date-fns';

interface StoryViewerProps {
  stories: Story[];
  currentStoryId: string | null;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

const StoryViewer = ({ stories, currentStoryId, onClose, onNext, onPrevious }: StoryViewerProps) => {
  const [progress, setProgress] = useState(0);
  const currentStory = stories.find((s) => s.id === currentStoryId);
  const currentIndex = stories.findIndex((s) => s.id === currentStoryId);

  useEffect(() => {
    if (!currentStory) return;

    setProgress(0);
    const duration = 5000;
    const interval = 50;
    const increment = (interval / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          if (currentIndex < stories.length - 1) {
            onNext();
          } else {
            onClose();
          }
          return 100;
        }
        return prev + increment;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [currentStoryId, currentStory, currentIndex, stories.length, onNext, onClose]);

  if (!currentStory) return null;

  const handlePrevious = () => {
    if (currentIndex > 0) {
      onPrevious();
    }
  };

  const handleNext = () => {
    if (currentIndex < stories.length - 1) {
      onNext();
    } else {
      onClose();
    }
  };

  return (
    <Dialog open={!!currentStoryId} onOpenChange={onClose}>
      <DialogContent className="max-w-md h-[90vh] p-0 bg-black border-none">
        <div className="relative w-full h-full flex flex-col">
          {/* Progress bars */}
          <div className="absolute top-0 left-0 right-0 z-20 flex gap-1 p-2">
            {stories.map((story, index) => (
              <div key={story.id} className="flex-1 h-1 bg-gray-600 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white transition-all duration-100"
                  style={{
                    width:
                      index < currentIndex
                        ? '100%'
                        : index === currentIndex
                        ? `${progress}%`
                        : '0%',
                  }}
                />
              </div>
            ))}
          </div>

          {/* Header */}
          <div className="absolute top-4 left-0 right-0 z-20 flex items-center justify-between px-4 pt-4">
            <div className="flex items-center space-x-2">
              <Avatar className="w-8 h-8 border-2 border-white">
                <AvatarImage src={currentStory.user.avatar} alt={currentStory.user.username} />
                <AvatarFallback>{currentStory.user.username[0].toUpperCase()}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-white text-sm font-semibold">
                  {currentStory.user.username}
                </span>
                <span className="text-gray-300 text-xs">
                  {formatDistanceToNow(currentStory.timestamp, { addSuffix: true })}
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-300 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Story Image */}
          <div className="flex-1 relative">
            <img
              src={currentStory.image}
              alt="Story"
              className="w-full h-full object-cover"
            />
            
            {/* Navigation areas */}
            <button
              onClick={handlePrevious}
              className="absolute left-0 top-0 bottom-0 w-1/3 cursor-pointer"
              aria-label="Previous story"
            />
            <button
              onClick={handleNext}
              className="absolute right-0 top-0 bottom-0 w-1/3 cursor-pointer"
              aria-label="Next story"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StoryViewer;
