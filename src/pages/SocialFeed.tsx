import { useState } from 'react';
import { mockStories, mockPosts, Post } from '@/data/socialData';
import StoriesBar from '@/components/StoriesBar';
import StoryViewer from '@/components/StoryViewer';
import PostCard from '@/components/PostCard';

const SocialFeed = () => {
  const [currentStoryId, setCurrentStoryId] = useState<string | null>(null);
  const [posts, setPosts] = useState<Post[]>(mockPosts);

  const handleStoryClick = (storyId: string) => {
    setCurrentStoryId(storyId);
  };

  const handleCloseStory = () => {
    setCurrentStoryId(null);
  };

  const handleNextStory = () => {
    const currentIndex = mockStories.findIndex((s) => s.id === currentStoryId);
    if (currentIndex < mockStories.length - 1) {
      setCurrentStoryId(mockStories[currentIndex + 1].id);
    }
  };

  const handlePreviousStory = () => {
    const currentIndex = mockStories.findIndex((s) => s.id === currentStoryId);
    if (currentIndex > 0) {
      setCurrentStoryId(mockStories[currentIndex - 1].id);
    }
  };

  const handleLike = (postId: string) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              isLiked: !post.isLiked,
              likes: post.isLiked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Stories Bar */}
      <StoriesBar stories={mockStories} onStoryClick={handleStoryClick} />

      {/* Story Viewer */}
      <StoryViewer
        stories={mockStories}
        currentStoryId={currentStoryId}
        onClose={handleCloseStory}
        onNext={handleNextStory}
        onPrevious={handlePreviousStory}
      />

      {/* Posts Feed */}
      <div className="max-w-2xl mx-auto py-6 px-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} onLike={handleLike} />
        ))}
      </div>
    </div>
  );
};

export default SocialFeed;
