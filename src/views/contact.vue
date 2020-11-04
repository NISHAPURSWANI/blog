<template>
  <div>
    <b-row class="header">
      <b-col class="cheader">
        <img alt="Vue logo" src="../assets/demandHub.png" class="imgbit" />
      </b-col>
      <b-col class="chheader">
        <button class="rbtn"><router-link to="/">Home</router-link></button>
        <button class="rbtn">
          <router-link to="/contact">Contact</router-link>
        </button>
        <button class="rbtn"><router-link to="/blog">Blog</router-link></button>
      </b-col>
    </b-row>
    <b-row class="maparea">
      <b-col class="map">
        <label for="fname">First Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
        />

        <label for="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name.."
        />

        <label for="country">Country</label>
        <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>

        <label for="subject">Subject</label>
        <textarea
          id="subject"
          name="subject"
          placeholder="Write something.."
          style="height:200px"
        ></textarea>

        <input type="submit" value="Submit" />
      </b-col>
      <b-col class="map">
        <gmap-map
          :center="center"
          :zoom="12"
          style="width:100%;  height: 400px;"
        >
          <gmap-marker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            @click="center = m.position"
          ></gmap-marker>
        </gmap-map>
      </b-col>
    </b-row>
    <b-row class="footer">
      <p class="ftext">
        Our Address:-<br />
        <b>Demand Hub</b><br />
        Hashu Advani Memorable complex<br />
        Chembur Mumbai-400074<br />
        contact:- <br />
        +91 7755933971<br />
        demandhub@dh.com
      </p>
    </b-row>
  </div>
</template>
<style scoped>
.maparea {
  margin-left: 100px;
  margin-right: 100px;
  padding-top: 150px;
}
.map {
  padding: 20px;
}
.atext {
  color: red;
}
/**0 */
input[type="text"],
select,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #45a049;
}
.header {
  margin-left: 0px;
  margin-right: 0px;
  height: 80px;
  background-color: black;
  position: fixed;
  width: 100%;
  z-index: 1;
}
.cheader {
  display: flex;
  align-items: center;
}
.chheader {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.rbtn {
  padding: 0 10px;
  margin-right: 20px;
  border: none;
  background: none;
}
.imgbit {
  height: 40px;
  width: 150px;
}
.footer {
  background-color: black;
  margin-left: 0px;
  margin-right: 0px;
}
.ftext {
  margin-left: 130px;
  font-size: 15px;
  padding-top: 50px;
  padding-bottom: 50px;
  color: white;
}
</style>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null
    };
  },

  mounted() {
    this.geolocate();
  },

  methods: {
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};
</script>