import * as SOCIALS from './socials'
import * as ENGAGEMENT_RATE from './engagement-rate'

export const Earning = {
    [ENGAGEMENT_RATE.Low]: {
        [SOCIALS.Youtube]: {
            min: 42,
            max: 601,
        },
        [SOCIALS.Facebook]: {
            min: 40,
            max: 444,
        },
        [SOCIALS.Twitter]: {
            min: .5,
            max: 2,
        },
        [SOCIALS.Instagram]: {
            min: 43,
            max: 533,
        },
        [SOCIALS.TikTok]: {
            min: 29,
            max: 311,
        },
        [SOCIALS.Blurbay]: {
            min: 5012,
            max: 9025,
        },
    },
    [ENGAGEMENT_RATE.Average]: {
        [SOCIALS.Youtube]: {
            min: 95,
            max: 1352,
        },
        [SOCIALS.Facebook]: {
            min: 90,
            max: 1000,
        },
        [SOCIALS.Twitter]: {
            min: 1,
            max: 4,
        },
        [SOCIALS.Instagram]: {
            min: 96,
            max: 1200,
        },
        [SOCIALS.TikTok]: {
            min: 66,
            max: 700,
        },
        [SOCIALS.Blurbay]: {
            min: 11277,
            max: 20305,
        },
    },
    [ENGAGEMENT_RATE.High]: {
        [SOCIALS.Youtube]: {
            min: 211,
            max: 3001,
        },
        [SOCIALS.Facebook]: {
            min: 200,
            max: 2220,
        },
        [SOCIALS.Twitter]: {
            min: 2,
            max: 9,
        },
        [SOCIALS.Instagram]: {
            min: 213,
            max: 2664,
        },
        [SOCIALS.TikTok]: {
            min: 147,
            max: 1554,
        },
        [SOCIALS.Blurbay]: {
            min: 25059,
            max: 45123,
        },
    },
}

export const buildEarning = (val, c) => {
    return formatNumber(val.min * c) + '-' + formatNumber(val.max * c)
}

const formatNumber = (number) => {
    return '$' + number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}