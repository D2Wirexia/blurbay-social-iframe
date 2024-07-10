import * as SOCIALS from './socials'
import * as ENGAGEMENT_RATE from './engagement-rate'

export const Earning = {
    [ENGAGEMENT_RATE.Low]: {
        [SOCIALS.Youtube]: {
            min: 11,
            max: 44,
        },
        [SOCIALS.Facebook]: {
            min: 11,
            max: 44,
        },
        [SOCIALS.Twitter]: {
            min: 11,
            max: 44,
        },
        [SOCIALS.Instagram]: {
            min: 11,
            max: 44,
        },
        [SOCIALS.TikTok]: {
            min: 11,
            max: 44,
        },
        [SOCIALS.Blurbay]: {
            min: 11,
            max: 44,
        },
    },
    [ENGAGEMENT_RATE.Average]: {
        [SOCIALS.Youtube]: {
            min: 11,
            max: 44,
        },
        [SOCIALS.Facebook]: {
            min: 11,
            max: 44,
        },
        [SOCIALS.Twitter]: {
            min: 11,
            max: 44,
        },
        [SOCIALS.Instagram]: {
            min: 11,
            max: 44,
        },
        [SOCIALS.TikTok]: {
            min: 11,
            max: 44,
        },
        [SOCIALS.Blurbay]: {
            min: 11,
            max: 44,
        },
    },
    [ENGAGEMENT_RATE.High]: {
        [SOCIALS.Youtube]: {
            min: 11,
            max: 44,
        },
        [SOCIALS.Facebook]: {
            min: 11,
            max: 44,
        },
        [SOCIALS.Twitter]: {
            min: 11,
            max: 44,
        },
        [SOCIALS.Instagram]: {
            min: 11,
            max: 44,
        },
        [SOCIALS.TikTok]: {
            min: 11,
            max: 44,
        },
        [SOCIALS.Blurbay]: {
            min: 11,
            max: 44,
        },
    },
}

export const buildEarning = (val, c) => {
    return `$${val.min * c}-$${val.max * c}`
}