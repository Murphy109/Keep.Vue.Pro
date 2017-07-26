
"use strict"

const BASEURL="http://localhost:3000"

const TRAINING = `${BASEURL}/IndexDrillTraining/getTraining`;
const RECOMMEND = `${BASEURL}/IndexDrillRecommend/getRecommend`;
const DAILY = `${BASEURL}/IndexDrillDaily/getDaily`;
const COURSE = `${BASEURL}/IndexDrillCourse/getCourse`;
const ROUTES= `${BASEURL}/IndexRunningRouteRoutes/getRoutes`;
const ABOUT= `${BASEURL}/IndexRunningAboutAbouts/getAbout`;
const BANNER= `${BASEURL}/IndexBanner/getBanner`;
const SWIPERBANNER = `${BASEURL}/banner/getbanner`;
const SWIPERBAN = `${BASEURL}/ban/getban`;
const SWIPERBANN = `${BASEURL}/bann/getbann`;
const SWIPERSTRATEGY = `${BASEURL}/strategy/getStrategy`;
const SWIPERTOPIC= `${BASEURL}/topic/gettopic`;
const SWIPERHOT = `${BASEURL}/hot/gethot`;
const SWIPERGROUPS = `${BASEURL}/groups/getgroups`;
const SWIPERINTELLIGENT = `${BASEURL}/intelligent/getintelligent`;
const SWIPERARTICLE = `${BASEURL}/article/getarticle`;
const SWIPERNEWS = `${BASEURL}/news/getnews`;
const SWIPERDIET = `${BASEURL}/diet/getdiet`;
const SHOPURLLINK = `${BASEURL}/shopGoods/getGoods`;
const SHOPCARURLLINK = `${BASEURL}/goodsInfo/getGoodsInfo`;
const STATUSLINK = `${BASEURL}/status/GetStatus`;
module.exports = {
    TRAINING,
    RECOMMEND,
    DAILY,
    COURSE,
    ROUTES,
    ABOUT,
    BANNER,
    SWIPERBANNER,
    SWIPERBAN,
    SWIPERBANN,
    SWIPERSTRATEGY,
    SWIPERTOPIC,
    SWIPERHOT,
    SWIPERGROUPS,
    SWIPERINTELLIGENT,
    SWIPERARTICLE,
    SWIPERNEWS,
    SWIPERDIET,
    SHOPURLLINK,
    SHOPCARURLLINK,
    STATUSLINK
}
