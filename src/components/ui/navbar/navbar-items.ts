export interface Subcategory {
  name: string;
  url: string;
  description: string;
}

export interface NavbarItem {
  category: string;
  url: string;
  subcategories: Subcategory[];
}

export interface NavbarData {
  leftItems: NavbarItem[];
  rightItems: NavbarItem[];
}

export const navbarData: NavbarData = {
  leftItems: [
    {
      category: "Home",
      url: "/",
      subcategories: [],
    },
    {
      category: "Blog",
      url: "/blog",
      subcategories: [],
    },
    {
      category: "Pricing",
      url: "/pricing",
      subcategories: [],
    },
    {
      category: "Services",
      url: "/services",
      subcategories: [
        {
          name: "Editor",
          url: "/product/editor",
          description: "Build and customize your app with a visual editor.",
        },
        {
          name: "Hosting",
          url: "/product/hosting",
          description: "Reliable and scalable hosting for your applications.",
        },
        {
          name: "Templates",
          url: "/product/templates",
          description: "Kickstart your project with pre-built templates.",
        },
        {
          name: "Editor",
          url: "/product/editor",
          description: "Build and customize your app with a visual editor.",
        },
        {
          name: "Hosting",
          url: "/product/hosting",
          description: "Reliable and scalable hosting for your applications.",
        },
        {
          name: "Templates",
          url: "/product/templates",
          description: "Kickstart your project with pre-built templates.",
        },
      ],
    },
    {
      category: "Projects",
      url: "/projects",
      subcategories: [
        {
          name: "Tutorials",
          url: "/learn/tutorials",
          description: "Step-by-step guides to master app building.",
        },
        {
          name: "Community",
          url: "/learn/community",
          description: "Connect with other builders and share ideas.",
        },
        {
          name: "Docs",
          url: "/learn/docs",
          description: "Detailed documentation for all features.",
        },
      ],
    },
  ],
  rightItems: [
    {
      category: "About Us",
      url: "/about",
      subcategories: [],
    },
    {
      category: "Careers",
      url: "/careers",
      subcategories: [],
    },
    {
      category: "Log in",
      url: "/auth/login",
      subcategories: [],
    },
  ],
};
