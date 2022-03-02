module.exports = {
  apps: [
    {
      name: "scitech-next",
      script: "npm start",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],

  deploy: {
    production: {
      user: "app",
      host: [
        {
          host: "176.120.26.91",
          port: "22148",
        },
      ],
      ref: "origin/master",
      repo: "git@gitlab.com:5g_simulations/scitech-next.git",
      path: "/opt/app/scitech-next",
      "pre-deploy": "../pre-deploy.sh",
      "post-deploy": "../post-deploy.sh",
    },
  },
}
