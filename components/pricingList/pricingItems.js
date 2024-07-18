import * as images from '../../public/antiqueAssets.js'

const pricingItems = [
    {
        name: 'Gold Sovereign',
        image: images.sov,
        pricing: 'up to',
        price: '£400',
        type: 'Gold'
    },
    {
        name: 'Gold Krugerrand',
        image: images.kruger,
        pricing: 'up to',
        price: '£1750',
        type: 'Gold'
    },
    {
        name: 'Hallmarked Silver',
        image: images.teaset,
        pricing: 'up to',
        price: '£15 per ounce',
        type: 'Silver'
    },
    {
        name: 'Scrap Gold, 9K',
        image: images.scrapgold,
        pricing: 'up to',
        price: '£20 per gram',
        type: 'Gold'
    },
    {
        name: 'Silver Jewellery',
        image: images.silverjewellery,
        pricing: 'min. of',
        price: '£15 per ounce',
        type: 'Silver'
    },
    {
        name: 'All models of Rolex',
        image: images.watches,
        pricing: 'min. of',
        price: '£500 to £25k',
        type: 'Watches'
    },
    {
        name: 'Old Pocket Watches',
        image: images.waltham,
        pricing: 'min. of',
        price: '£25 to £1000',
        type: 'Watches'
    },
    {
        name: 'Omega Watches',
        image: images.omega,
        pricing: 'min. of',
        price: '£100 up to £10k',
        type: 'Watches'
    },
    {
        name: 'Pre-1947 Scrap Silver Coins',
        image: images.coins,
        pricing: 'min. of',
        price: '10x Face Value',
        type: 'Coins'
    },
    {
        name: 'Collectible Coins Any Age',
        image: images.collectibleCoin,
        pricing: '',
        price: 'Higher Prices for Collectible',
        type: 'Coins'
    }, 
]

export default pricingItems;