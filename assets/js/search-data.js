// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-reflections",
          title: "reflections",
          description: "Photography, culinary adventures, visual quotes, and poetry",
          section: "Navigation",
          handler: () => {
            window.location.href = "/reflections/";
          },
        },{id: "post-problems-to-solve",
        
          title: "Problems to Solve",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/problems-to-solve/";
          
        },
      },{id: "post-tao-te-ching-demystified",
        
          title: "Tao Te Ching Demystified",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/tao-te-ching-demystified/";
          
        },
      },{id: "post-calendar-of-wisdom-tolstoy",
        
          title: "Calendar of Wisdom - Tolstoy",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/calender-of-wisdom-tolstoy/";
          
        },
      },{id: "post-style-guidelines-and-conventions",
        
          title: "Style Guidelines and Conventions",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/style-and-conventions/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-joining-machine-translation-team-at-rakuten-institute-of-technology-singapore",
          title: 'Joining Machine Translation Team at Rakuten Institute of Technology, Singapore',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2_joining_machine_translation_team/";
            },},{id: "news-rakuten-ai-7b-models-released",
          title: 'Rakuten AI 7B Models Released',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_3_rakuten_ai_7b_models_released/";
            },},{id: "news-release-of-rakuten-ai-2-0-mixture-of-experts-model-and-1-5b-small-language-model",
          title: 'Release of Rakuten AI 2.0 - Mixture of Experts Model and 1.5B Small...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_4_release_of_rakuten_ai_2.0_mixture_of_experts_model_and/";
            },},{id: "news-rakuten-group-inc-selected-for-ministry-of-economy-trade-and-industry-meti-and-nedo-s-geniac-project-to-bolster-genai-development-in-japan",
          title: 'Rakuten Group Inc. selected for Ministry of Economy, Trade and Industry (METI) and...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "reflections-photography",
          title: 'Photography',
          description: "nature and travel photography",
          section: "Reflections",handler: () => {
              window.location.href = "/reflections/1_gallery/";
            },},{id: "reflections-cooking",
          title: 'Cooking',
          description: "culinary adventures and food photography",
          section: "Reflections",handler: () => {
              window.location.href = "/reflections/2_cooking/";
            },},{id: "reflections-quotes",
          title: 'Quotes',
          description: "quotes and reflections",
          section: "Reflections",handler: () => {
              window.location.href = "/reflections/3_quotes/";
            },},{id: "reflections-poetry",
          title: 'Poetry',
          description: "Original poems and writings (2003-2020)",
          section: "Reflections",handler: () => {
              window.location.href = "/reflections/4_poetry/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%66%79%6E%73%6E%6D%61%6E@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/sukuya", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/sukuya", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=SMLlifoAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/sukuya", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
