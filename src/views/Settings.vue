<template>
<div align="left">
    <h4> <i class="fa fa-cog" aria-hidden="true"> </i> &nbsp; Settings</h4>
    <hr width="33%" align="left" />
    <label for="theme">Theme: </label>
    <input type="radio" name="theme" value="dark" /> Dark
    <input type="radio" name="theme" value="light" /> Light <br />

    <h4>Preference:</h4>
    <hr width="33%" align="left" />
    <label for="pushnotification">Push Notification: </label>
    <input type="radio" name="pushnotification" value="on" /> On
    <input type="radio" name="pushnotification" value="off" /> Off <br />
</div>
</template>

<script>
export default {
    data() {
        return {
            theme: "",
        };
    },
    methods: {},
};
</script>
