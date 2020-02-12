<template>
    <div class="Map">
        <MapChart/>
    </div>
</template>

<script>
    import MapChart from "@/components/map/MapChart";
    import api from '../core/datainterface';

    export default {
        name: "Map",
        components: {MapChart, api},
        mounted() {
            api.getmsg().then((res1) => {
                console.log(res1)
            }).catch((err1) => {
                console.log(err1);
            });
        }
    };
</script>

<style lang="less" scoped>
</style>
