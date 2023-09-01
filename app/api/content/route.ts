const posts = [
  {
    title: "10 Essential Tips for Successful Time Management",
    slug: "time-management-tips",
    content:
      "In this blog post, we'll explore time management techniques and strategies to help you become more productive and efficient in your daily life. From setting priorities to using productivity tools, you'll discover practical tips for making the most of your time.",
  },
  {
    title: "The Science of Happiness: How to Cultivate Joy in Your Life",
    slug: "science-of-happiness",
    content:
      "Delve into the psychology behind happiness and learn actionable steps to boost your overall well-being. This blog post will explore the science of happiness, including the role of gratitude, mindfulness, and social connections in creating a happier life.",
  },
  {
    title:
      "The Art of Effective Communication: 7 Strategies for Better Relationships",
    slug: "effective-communication-strategies",
    content:
      "Effective communication is key to building and maintaining healthy relationships, both personally and professionally. This post will provide readers with seven practical strategies to improve their communication skills, including active listening and conflict resolution techniques.",
  },
  {
    title: "Green Living 101: Easy Ways to Make Your Home More Eco-Friendly",
    slug: "green-living-tips",
    content:
      "Sustainability and environmental consciousness are growing concerns. This blog post will offer readers a beginner's guide to adopting a greener lifestyle by making eco-friendly choices within their homes. From energy-saving tips to reducing waste, you'll find actionable steps to minimize your environmental footprint.",
  },
  {
    title: "Mastering the Art of Self-Care: Prioritizing Your Well-Being",
    slug: "self-care-tips",
    content:
      "Self-care is crucial for maintaining mental and physical health, yet many people neglect it. This post will guide readers through the importance of self-care and provide practical ideas and self-care routines to incorporate into their daily lives, promoting overall well-being.",
  },
  {
    title: "The Power of Positive Thinking: How It Can Transform Your Life",
    slug: "positive-thinking-power",
    content:
      "Positive thinking can have a profound impact on your life. Explore the benefits of a positive mindset and discover techniques to cultivate optimism. This blog post will show you how positive thinking can lead to greater success and happiness.",
  },
  {
    title: "Unlocking Creativity: Strategies for Overcoming Creative Blocks",
    slug: "overcoming-creative-blocks",
    content:
      "Creativity is essential in various aspects of life, from art and innovation to problem-solving. This post will explore common creative blocks and provide practical strategies to overcome them. Unleash your creativity and tap into your full artistic potential.",
  },
  {
    title: "The Journey to Financial Freedom: Building a Solid Financial Plan",
    slug: "financial-freedom-journey",
    content:
      "Financial freedom is a goal for many, but achieving it requires careful planning and smart financial decisions. This blog post will outline the steps to create a solid financial plan, including budgeting, saving, and investing tips to secure your financial future.",
  },
  {
    title: "Healthy Eating Habits: Tips for a Balanced Diet and Wellness",
    slug: "healthy-eating-habits",
    content:
      "Maintaining a balanced diet is crucial for overall health and wellness. This post will provide readers with practical tips for adopting healthy eating habits, including meal planning, portion control, and mindful eating practices.",
  },
  {
    title:
      "Navigating the Job Market: Strategies for a Successful Career Search",
    slug: "job-market-strategies",
    content:
      "Searching for a job can be a daunting task, especially in a competitive job market. This blog post will offer valuable strategies for a successful career search, including resume building, networking, and interview preparation.",
  },
];
//instead of returning UI, this route.ts will return a json object
//at api/content

import { NextResponse } from "next/server";

export async function GET () { //created a GET endpoint
    return NextResponse.json(posts); //It returns a json version of posts
}