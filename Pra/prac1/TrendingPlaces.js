
// import React from 'react';
// import { StyleSheet, Text, View, Image } from 'react-native';

// const TrendingPlaces = () => {
//   return (
//     <View>
//       <Text style={styles.headingText}>Trending Places</Text>
//       <View style={[styles.card, styles.cardElevated]}>
//         <Image source={require('../img/Bihar.jpg')} style={styles.image} />
//         <View style={styles.cardBody}>
//           <Text style={styles.cardTitle}>Land of Rich Heritage and Natural Beauty</Text>
//           <Text style={styles.cardLabel}>Bihar Tourism Destinations</Text>
//           <Text style={styles.cardDescription}>
//             Bihar, situated in the heart of India, boasts a captivating blend of history and natural beauty. Explore ancient marvels like Nalanda and Vikramshila, hubs of ancient learning. Experience spiritual serenity at Bodh Gaya, the site of Buddha's enlightenment.
//           </Text>
//           <View style={styles.footer}>
//             <Text style={styles.footerText}>Explore more about Bihar:</Text>
//             <View style={styles.footerLinks}>
//               <Text style={styles.link}>Official Tourism Website</Text>
//               <Text style={styles.link}>Bihar Tourism Blog</Text>
//               <Text style={styles.link}>Follow us on Instagram</Text>
//             </View>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default TrendingPlaces;

// const styles = StyleSheet.create({
//   headingText: {
//     textAlign: 'center',
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'black',
//     marginTop: 10,
//   },
//   card: {
//     marginHorizontal: 10,
//     marginVertical: 10,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   cardElevated: {},
//   image: {
//     height: 200,
//     width: '100%',
//     borderTopLeftRadius: 10,
//     borderTopRightRadius: 10,
//   },
//   cardBody: {
//     padding: 10,
//   },
//   cardTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   cardDescription: {
//     fontSize: 16,
//     marginBottom: 10,
//   },
//   cardLabel: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 5,
//     color: '#888',
//   },
//   footer: {
//     borderTopWidth: 1,
//     borderTopColor: '#ccc',
//     paddingTop: 10,
//     marginTop: 10,
//   },
//   footerText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 10,
//   },
//   footerLinks: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//   },
//   link: {
//     fontSize: 16,
//     color: '#333',
//     marginRight: 10,
//     marginBottom: 5,
//   },
// });


import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, Linking } from 'react-native';

const { width } = Dimensions.get('window');

const TrendingPlaces = () => {
  const handleLinkPress = (url) => {
    Linking.openURL(url);
  };

  return (
    <>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image source={require('../img/Bihar.jpg')} style={styles.image} />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Land of Rich Heritage and Natural Beauty</Text>
          <Text style={styles.cardLabel}>Bihar Tourism Destinations</Text>
          <Text style={styles.cardDescription}>
            Bihar, situated in the heart of India, boasts a captivating blend of history and natural beauty. Explore ancient marvels like Nalanda and Vikramshila, hubs of ancient learning. Experience spiritual serenity at Bodh Gaya, the site of Buddha's enlightenment.
          </Text>
          <View style={styles.footer}>
            <Text style={styles.footerText}>Explore more about Bihar:</Text>
            <View style={styles.footerLinks}>
              <TouchableOpacity onPress={() => handleLinkPress('http://example.com/official-tourism-website')}>
                <Text style={styles.link}>Official Tourism Website</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleLinkPress('http://example.com/bihar-tourism-blog')}>
                <Text style={styles.link}>Bihar Tourism Blog</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleLinkPress('http://example.com/instagram')}>
                <Text style={styles.link}>Follow us on Instagram</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default TrendingPlaces;

const styles = StyleSheet.create({
  headingText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
  },
  card: {
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardElevated: {},
  image: {
    height: 200,
    width: width - 20, // Adjusted for margin
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardBody: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  cardLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#888',
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 10,
    marginTop: 10,
  },
  footerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  footerLinks: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  link: {
    fontSize: 16,
    color: '#333',
    marginRight: 10,
    marginBottom: 5,
  },
});
