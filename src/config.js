export default {
  IMAGE_URL: process.env.NODE_ENV === 'production' ? '' : '/img/',
  ICON_URL: process.env.NODE_ENV === 'production' ? '' : '/Icons/'
}