import { Story } from '@/data/socialData';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

interface StoriesBarProps {
  stories: Story[];
  onStoryClick: (storyId: string) => void;
}

const StoriesBar = ({ stories, onStoryClick }: StoriesBarProps) => {
  return (
    <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 py-4">
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex space-x-4 px-4">
          {stories.map((story) => (
            <button
              key={story.id}
              onClick={() => onStoryClick(story.id)}
              className="flex flex-col items-center space-y-1 flex-shrink-0 group"
            >
              <div
                className={`p-[3px] rounded-full bg-gradient-to-tr ${
                  story.viewed
                    ? 'from-gray-300 to-gray-400'
                    : 'from-yellow-400 via-pink-500 to-purple-600'
                } transition-transform group-hover:scale-105`}
              >
                <div className="p-[3px] bg-white dark:bg-gray-900 rounded-full">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={story.user.avatar} alt={story.user.username} />
                    <AvatarFallback>{story.user.username[0].toUpperCase()}</AvatarFallback>
                  </Avatar>
                </div>
              </div>
              <span className="text-xs text-gray-700 dark:text-gray-300 max-w-[70px] truncate">
                {story.user.username}
              </span>
            </button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default StoriesBar;
