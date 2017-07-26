<template>
    <div>
        <mine-mines></mine-mines>
        <mine-infos></mine-infos>
        <mine-sport-info></mine-sport-info>
        <mine-health-data></mine-health-data>
        <mine-emblem></mine-emblem>
        <mine-training-diary></mine-training-diary>
        <mine-profiles></mine-profiles>
        <mine-weekly-goals></mine-weekly-goals>
        <mine-my-activities></mine-my-activities>
        <mine-my-collect></mine-my-collect>
        <mine-my-group></mine-my-group>
        <mine-shopping-cart></mine-shopping-cart>
        <mine-purchase-history></mine-purchase-history>
        <mine-discount-coupon></mine-discount-coupon>
        <keep-footer></keep-footer>
    </div>
</template>


<script type='text/ecmascript-6'>
    import KeepFooter from "../components/KeepFooter.vue"
    import "../static/css/mine.css";
    import MineMines from "../components/mine/MineMines.vue";
    import MineInfos from "../components/mine/MineInfo.vue";
    import MineSportInfo from  "../components/mine/MineSportInfo.vue";
    import MineHealthData from "../components/mine/MineHealthData.vue";
    import MineEmblem from "../components/mine/MineEmblem.vue";
    import MineTrainingDiary from "../components/mine/MineTrainingDiary.vue";
    import MineProfiles from "../components/mine/MineProfiles.vue";
    import MineWeeklyGoals from "../components/mine/MineWeeklyGoals.vue";
    import MineMyActivities from "../components/mine/MineMyActivities.vue";
    import MineMyCollect from "../components/mine/MineMyCollect.vue";
    import MineMyGroup from "../components/mine/MineMyGroup.vue";
    import MineShoppingCart from "../components/mine/MineShoppingCart.vue";
    import MinePurchaseHistory from "../components/mine/MinePurchaseHistory.vue";
    import MineDiscountCoupon from "../components/mine/MineDiscountCoupon.vue";
    export default {
        components:{
            MineMines,
            MineInfos,
            MineSportInfo,
            MineHealthData,
            MineEmblem,
            MineTrainingDiary,
            MineProfiles,
            MineWeeklyGoals,
            MineMyActivities,
            MineMyCollect,
            MineMyGroup,
            MineShoppingCart,
            MinePurchaseHistory,
            MineDiscountCoupon,
            KeepFooter
        }
    }
</script>

<style scoped>

</style>