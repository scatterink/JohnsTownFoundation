// Imports
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash }
    if (savedPosition) return savedPosition

    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/home/Index.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/views/home/Index.vue'),
         },
        {
          path: 'pro',
          name: 'Pro',
          component: () => import('@/views/pro/Index.vue'),
          meta: { src: require('@/assets/pro.jpg') },
        },
        {
          path: 'about',
          name: 'About',
          component: () => import('@/views/about.vue'),
          },
          {
            path: 'projects',
            name: 'Projects',
            component: () => import('@/views/projects.vue'),
            },
            {
            path: 'schools',
            name: 'Schools',
            component: () => import('@/views/schools.vue'),
            },
            {
            path: 'library',
            name: 'Library',
            component: () => import('@/views/library.vue'),
            },
            {
            path: 'postoffice',
            name: 'Post Office',
            component: () => import('@/views/postoffice.vue'),
            },
            {
              path: 'trademen',
              name: 'Trade-Men',
              component: () => import('@/views/trademen.vue'),
              },
              {
                path: 'gallery',
                name: 'Gallery',
                component: () => import('@/views/gallery.vue'),
                },
                {
                  path: 'merchandise',
                  name: 'Merchandise',
                  component: () => import('@/views/merchandise.vue'),
                  },
                  {
                    path: 'donate',
                    name: 'Donate',
                    component: () => import('@/views/donate.vue'),
                    },
                    {
                      path: 'sponsors',
                      name: 'Sponsors',
                      component: () => import('@/views/sponsors.vue'),
                      },
                      {
                        path: 'contactus',
                        name: 'Contact Us',
                        component: () => import('@/views/contactus.vue'),
                        },
      ],
    },

  ],
})

export default router
