export interface Subcategory {
  name: string;
  url: string;
  description: string; // Add description field
}

export interface NavbarItem {
  category: string;
  url: string;
  subcategories: Subcategory[];
}

export const navbarData: { navbarItems: NavbarItem[] } = {
  navbarItems: [
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
      category: "Product",
      url: "/product",
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
      ],
    },
    {
      category: "Pricing",
      url: "/pricing",
      subcategories: [],
    },
    {
      category: "Learn",
      url: "/learn",
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
    {
      category: "Customers",
      url: "/customers",
      subcategories: [],
    },
    {
      category: "Log in",
      url: "/login",
      subcategories: [],
    },
  ],
};
