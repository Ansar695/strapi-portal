// @ts-nocheck
'use strict';

/**
 * playlist controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::playlist.playlist', ({ strapi }) => ({
    async find(ctx) {
      const { data, meta } = await super.find(ctx);
  
      // Calculate total videos for each playlist
      const newData = data.map((playlist) => {
        const totalVideos = playlist.attributes.videos.data.length;
        return {
          ...playlist,
          attributes: {
            ...playlist.attributes,
            totalVideos, // Add the totalVideos attribute
          },
        };
      });

      return { data: newData, meta };
    },
  }));
