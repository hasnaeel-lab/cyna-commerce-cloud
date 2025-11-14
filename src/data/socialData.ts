export interface User {
  id: string;
  username: string;
  fullName: string;
  avatar: string;
  isVerified?: boolean;
}

export interface Story {
  id: string;
  user: User;
  image: string;
  timestamp: Date;
  viewed?: boolean;
}

export interface Post {
  id: string;
  user: User;
  image: string;
  caption: string;
  likes: number;
  comments: Comment[];
  timestamp: Date;
  isLiked?: boolean;
}

export interface Comment {
  id: string;
  user: User;
  text: string;
  timestamp: Date;
}

export const mockUsers: User[] = [
  {
    id: '1',
    username: 'sarah_travels',
    fullName: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    isVerified: true,
  },
  {
    id: '2',
    username: 'alex_photo',
    fullName: 'Alex Martinez',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
  },
  {
    id: '3',
    username: 'emma_design',
    fullName: 'Emma Wilson',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    isVerified: true,
  },
  {
    id: '4',
    username: 'mike_fitness',
    fullName: 'Mike Chen',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
  },
  {
    id: '5',
    username: 'lisa_food',
    fullName: 'Lisa Anderson',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop',
  },
  {
    id: '6',
    username: 'david_tech',
    fullName: 'David Brown',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop',
    isVerified: true,
  },
  {
    id: '7',
    username: 'sophia_art',
    fullName: 'Sophia Lee',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop',
  },
  {
    id: '8',
    username: 'james_music',
    fullName: 'James Taylor',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
  },
];

export const mockStories: Story[] = [
  {
    id: 's1',
    user: mockUsers[0],
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=1200&fit=crop',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    viewed: false,
  },
  {
    id: 's2',
    user: mockUsers[1],
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=1200&fit=crop',
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
    viewed: false,
  },
  {
    id: 's3',
    user: mockUsers[2],
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=1200&fit=crop',
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
    viewed: true,
  },
  {
    id: 's4',
    user: mockUsers[3],
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=1200&fit=crop',
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
    viewed: false,
  },
  {
    id: 's5',
    user: mockUsers[4],
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=1200&fit=crop',
    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000),
    viewed: true,
  },
  {
    id: 's6',
    user: mockUsers[5],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=1200&fit=crop',
    timestamp: new Date(Date.now() - 10 * 60 * 60 * 1000),
    viewed: false,
  },
  {
    id: 's7',
    user: mockUsers[6],
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=1200&fit=crop',
    timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000),
    viewed: false,
  },
];

const mockComments: Comment[] = [
  {
    id: 'c1',
    user: mockUsers[1],
    text: 'Amazing shot! 📸',
    timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000),
  },
  {
    id: 'c2',
    user: mockUsers[2],
    text: 'Love this! Where is this?',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
  },
];

export const mockPosts: Post[] = [
  {
    id: 'p1',
    user: mockUsers[0],
    image: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&h=800&fit=crop',
    caption: 'Chasing sunsets and dreams ✨ #travel #sunset #wanderlust',
    likes: 1234,
    comments: mockComments,
    timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000),
    isLiked: false,
  },
  {
    id: 'p2',
    user: mockUsers[1],
    image: 'https://images.unsplash.com/photo-1682687221038-404cb8830901?w=800&h=800&fit=crop',
    caption: 'Nature never goes out of style 🌿',
    likes: 856,
    comments: [],
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
    isLiked: true,
  },
  {
    id: 'p3',
    user: mockUsers[2],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=800&fit=crop',
    caption: 'New design project coming soon! Stay tuned 🎨 #design #creative',
    likes: 2341,
    comments: [
      {
        id: 'c3',
        user: mockUsers[3],
        text: "Can't wait to see it!",
        timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000),
      },
    ],
    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000),
    isLiked: false,
  },
  {
    id: 'p4',
    user: mockUsers[3],
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=800&fit=crop',
    caption: 'Morning workout done! 💪 #fitness #motivation #gym',
    likes: 567,
    comments: [],
    timestamp: new Date(Date.now() - 10 * 60 * 60 * 1000),
    isLiked: true,
  },
  {
    id: 'p5',
    user: mockUsers[4],
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=800&fit=crop',
    caption: 'Homemade pizza night! 🍕 Recipe on my blog',
    likes: 1890,
    comments: [
      {
        id: 'c4',
        user: mockUsers[0],
        text: 'Looks delicious! 😋',
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      },
      {
        id: 'c5',
        user: mockUsers[5],
        text: 'Need that recipe ASAP!',
        timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000),
      },
    ],
    timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000),
    isLiked: false,
  },
  {
    id: 'p6',
    user: mockUsers[5],
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=800&fit=crop',
    caption: 'Building something amazing 👨‍💻 #coding #tech #developer',
    likes: 3421,
    comments: [],
    timestamp: new Date(Date.now() - 15 * 60 * 60 * 1000),
    isLiked: true,
  },
  {
    id: 'p7',
    user: mockUsers[6],
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&h=800&fit=crop',
    caption: 'Latest artwork 🎨 What do you think?',
    likes: 987,
    comments: [
      {
        id: 'c6',
        user: mockUsers[2],
        text: 'Beautiful colors!',
        timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000),
      },
    ],
    timestamp: new Date(Date.now() - 18 * 60 * 60 * 1000),
    isLiked: false,
  },
];
