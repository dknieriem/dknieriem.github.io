---
layout: gist
title: Webpack Config
description: A webpack config file to work with Twig and StorybookJS
link: https://gist.github.com/dknieriem/8e1b3bfc2818c23fbfd53626f891cb00
embed: <script src="https://gist.github.com/dknieriem/8e1b3bfc2818c23fbfd53626f891cb00.js"></script>
tags: StorybookJS Twig NodeJS Webpack
visibility: public
---

Storybook expected twig references using relative paths, while Timber twig expected them using './' notation. By using twigjs-loader (npm install -d twigjs-loader), as well as registering aliases for the appropriate directories, in storybook's webpack config, both Timber twig and storybook will accept paths beginning with an alias (see included navbar.twig).