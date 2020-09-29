<template>
<div align="left">
    <h4>
        <i class="fa fa-bell-o" aria-hidden="true"> </i> &nbsp; Notifications
    </h4>
    <hr width="33%" align="left" />
    <label for="elNotification">Notification:</label>
    <select name="elNotification" v-model="userNotification">
        <option disabled value="">Please select notification</option>
        <option v-for="notification in notifications" :key="notification" :value="notification">
            {{ notification.name }}
        </option>
    </select>
    <br />
</div>
</template>

<script>
export default {
    data() {
        return {
            userNotification: null,
            notifications: [{
                    name: "Message-1",
                    desc: "One-Message",
                },
                {
                    name: "Message-2",
                    desc: "Two-Message",
                },
                {
                    name: "Message-3",
                    desc: "Three-Message",
                },
            ],
        };
    },
    methods: {},
};
</script>
