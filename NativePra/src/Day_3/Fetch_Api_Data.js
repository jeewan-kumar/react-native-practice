// import React, {useEffect, useState} from 'react';
// import {ActivityIndicator, FlatList, Text, View} from 'react-native';

// const App = () => {
//   const [isLoading, setLoading] = useState(true);
//   const [data, setData] = useState([]);

//   const getMovies = async () => {
//     try {
//       const response = await fetch('https://reactnative.dev/movies.json');
//       const json = await response.json();
//       setData(json.movies);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getMovies();
//   }, []);

//   return (
//     <View style={{flex: 1, padding: 24}}>
//       {isLoading ? (
//         <ActivityIndicator />
//       ) : (
//         <FlatList
//           data={data}
//           keyExtractor={({id}) => id}
//           renderItem={({item}) => (
//             <Text>
//               {item.title}, {item.releaseYear}
//             </Text>
//           )}
//         />
//       )}
//     </View>
//   );
// };

// export default App;

import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Alert, ActivityIndicator } from 'react-native';
import axios from 'axios';

const profileUrl = "http://192.168.33.157:5164/skillup_UserProfile";

const UserProfile = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUserProfile();
    }, []);

    const fetchUserProfile = async () => {
        try {
            const requestData = {
                eventID: "1002",
                addInfo: {
                    id: "2"  // Replace with the actual user ID
                }
            };
            const response = await axios.post(profileUrl, requestData);
            console.log(response.data);
            if (response.data.rData.rCode === 0) {
                setData(response.data.rData.lessons[0][0]);  // Accessing the nested profile data
            } else {
                setError(response.data.rData.rMessage);
            }
        } catch (err) {
            console.error(err);
            setError(err.message);
            Alert.alert("Error", `Failed to fetch data: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text>Loading...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>Error: {error}</Text>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.profileHeader}>
                <Image source={{ uri: data[1] }} style={styles.profileImage} />
                <Text style={styles.name}>{data[2]} {data[3]}</Text>
                <Text style={styles.bio}>{data[6]}</Text>
            </View>
            <View style={styles.infoSection}>
                <Text style={styles.infoTitle}>Profile Information</Text>
                <Text style={styles.infoText}>Date of Birth: {data[4]}</Text>
                <Text style={styles.infoText}>Gender: {data[5]}</Text>
            </View>
            <View style={styles.coursesSection}>
                <Text style={styles.coursesTitle}>Enrolled Courses</Text>
                {/* Assuming that courses information is an array within the data */}
                {data.courses && data.courses.length > 0 ? (
                    data.courses.map((course, index) => (
                        <View key={index} style={styles.courseItem}>
                            <Text style={styles.courseTitle}>{course.title}</Text>
                            <Text style={styles.courseDescription}>{course.description}</Text>
                        </View>
                    ))
                ) : (
                    <Text style={styles.noCoursesText}>No courses enrolled</Text>
                )}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        color: 'red',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20,
    },
    profileHeader: {
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    bio: {
        fontSize: 16,
        color: 'gray',
        textAlign: 'center',
        marginTop: 10,
    },
    infoSection: {
        marginBottom: 20,
    },
    infoTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    infoText: {
        fontSize: 16,
        marginBottom: 5,
    },
    coursesSection: {
        marginBottom: 20,
    },
    coursesTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    courseItem: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginBottom: 10,
    },
    courseTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    courseDescription: {
        fontSize: 14,
        color: 'gray',
    },
    noCoursesText: {
        fontSize: 16,
        color: 'gray',
        textAlign: 'center',
        marginTop: 20,
    },
});

export default UserProfile;
