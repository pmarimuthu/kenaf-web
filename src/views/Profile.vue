<template>
<div align="left">
    <h4> <i class="fa fa-address-card-o" aria-hidden="true"> </i> &nbsp; Profile</h4>
    <label for="name">Name: </label>
    <input name="name" type="name" placeholder="Name" /> <br />

    <label for="fathersName">Father's Name: </label>
    <input name="fathersName" type="name" placeholder="Father's Name" /> <br />

    <label for="mothersName">Mother's Name: </label>
    <input name="mothersName" type="name" placeholder="Mother's Name" /> <br />

    <hr width="33%" align="left" />
    <label for="email">Email: </label>
    <input name="email" type="email" placeholder="Email" /> <br />

    <label for="phone">Phone: </label>
    <input name="phone" type="Phone" placeholder="Phone" /> <br />

    <hr width="33%" align="left" />
    <label for="dob">Date of birth: </label>
    <input type="date" name="dob" /> <br />

    <label for="gender">Gender: </label>
    <input type="radio" name="gender" value="male" /> Male <input type="radio" name="gender" value="female" /> Female <br />

    <hr width="33%" align="left" />
    <label for="house">House#: </label>
    <input type="text" name="house" /> <br />

    <label for="city">City: </label>
    <input type="text" name="city" /> <br />

    <label for="state">State: </label>
    <input type="text" name="state" /> <br />

    <label for="country">Country: </label>
    <input type="text" name="country" /> <br />

    <label for="pincode">Pincode: </label>
    <input type="text" name="pincode" /> <br />

    <i class="fa fa-map-marker" style="font-size:16px" v-on:click="getLocation"></i>
    &nbsp; <label id="latitude"> Lat: {{ latitude }} </label>
    &nbsp; <label id="longitude"> Long: {{ longitude }} </label> <br />

    <hr width="33%" align="left" />
    <label for="sgothram">Gothram: </label>
    <select name="sgothram" v-model="userGothram">
        <option disabled value="">Please select gothram</option>
        <option v-for="gothram in gothrams" :key="gothram" :value="gothram"> {{ gothram.name }} </option>
    </select> <br />

    <label for="nativeplace">Native place: </label>
    <input type="text" name="nativeplace" /> <br />

    <label for="kulatheivam">Kulatheivam: </label>
    <input type="text" name="kulatheivam" /> <br />

    <label for="veettusamy">Veettu Samy: </label>
    <input type="text" name="veettusamy" /> <br />

    <hr width="33%" align="left" />
    <label for="occupation">Occupation: </label>
    <select name="occupation" v-model="userOccupation">
        <option disabled value="">Please select occupation</option>
        <option v-for="occupation in occupations" :key="occupation" :value="occupation"> {{ occupation.name }} </option>
    </select> <br />

    <label for="occupName">Name: </label>
    <input type="text" name="occupName" /> <br />

    <label for="occupAddress">Address: </label>
    <input type="text" name="occupAddress" /> <br />

    <button>Submit</button><br />
</div>
</template>

<script>
export default {
    data() {
        return {
            latitude: "",
            longitude: "",
            userGothram: "",
            gothrams: [{
                    name: 'G1-Name',
                    desc: 'G1-Description'
                },
                {
                    name: 'G2-Name',
                    desc: 'G2-Description'
                },
                {
                    name: 'G3-Name',
                    desc: 'G3-Description'
                },
                {
                    name: 'G4-Name',
                    desc: 'G4-Description'
                }
            ],
            userOccupation: "",
            occupations: [{
                    name: 'Business',
                    desc: 'Biz-Description'
                },
                {
                    name: 'Private',
                    desc: 'Private-Description'
                },
                {
                    name: 'Govt.',
                    desc: 'Govt-Description'
                },
                {
                    name: 'Agriculture',
                    desc: 'Agri-Description'
                },
                {
                    name: 'Student',
                    desc: 'Student-Description'
                },
                {
                    name: 'Teacher',
                    desc: 'Teacher-Description'
                },
                {
                    name: 'Other',
                    desc: 'Other-Description'
                }
            ]

        }

    },
    methods: {
        getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this.geoCallback);
            } else {
                this.myLocation = "Geolocation is not supported by this browser.";
            }
        },
        geoCallback(position) {
            this.latitude = position.coords.latitude;
            this.longitude = position.coords.longitude;
        }
    }
};
</script>
