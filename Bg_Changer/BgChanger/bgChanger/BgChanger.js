// import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React, { useState } from 'react'

// const BgChanger = () => {
//   const [randomBackground, setRandomBackground] = useState("#ffffff");
//   const [quotes, setQuotes] = useState([
//     {
//       quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
//       author: "Nelson Mandela"
//     },
//     {
//       quote: "The way to get started is to quit talking and begin doing.",
//       author: "Walt Disney"
//     },
//     {
//       quote: "Your time is limited, so don't waste it living someone else's life.",
//       author: "Steve Jobs"
//     },
//     {
//       quote: "Believe you can and you're halfway there.",
//       author: "Theodore Roosevelt"
//     },
//     {
//       quote: "It does not matter how slowly you go as long as you do not stop.",
//       author: "Confucius"
//     },
//     {
//       quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
//       author: "Winston Churchill"
//     },
//     {
//       quote: "Don't watch the clock; do what it does. Keep going.",
//       author: "Sam Levenson"
//     },
//     {
//       quote: "You are never too old to set another goal or to dream a new dream.",
//       author: "C.S. Lewis"
//     },
//     {
//       quote: "The future belongs to those who believe in the beauty of their dreams.",
//       author: "Eleanor Roosevelt"
//     },
//     {
//       quote: "You miss 100% of the shots you don't take.",
//       author: "Wayne Gretzky"
//     },
//     {
//       quote: "I have not failed. I've just found 10,000 ways that won't work.",
//       author: "Thomas Edison"
//     },
//     {
//       quote: "You don't have to be great to start, but you have to start to be great.",
//       author: "Zig Ziglar"
//     },
//     {
//       quote: "Do something today that your future self will thank you for.",
//       author: "Unknown"
//     },
//     {
//       quote: "Happiness can be found even in the darkest of times if one only remembers to turn on the light.",
//       author: "Albus Dumbledore"
//     },
//     {
//       quote: "You are stronger than you seem, braver than you believe, and smarter than you think.",
//       author: "Christopher Robin"
//     },
//   ];

//   // Select a random quote as initial state
//   const initialRandomIndex = Math.floor(Math.random() * quotes.length);
//   const initialRandomQuote = quotes[initialRandomIndex];

//   const [quote, setQuote] = useState(initialRandomQuote.quote);
//   const [author, setAuthor] = useState(initialRandomQuote.author);

//   const generateRandomQuote = () => {
//     // Generate a random index within the range of the quotes array
//     const randomIndex = Math.floor(Math.random() * quotes.length);
  
//     // Get the quote and author at the random index
//     const randomQuote = quotes[randomIndex];
  
//     // Update the quote and author state
//     setQuote(randomQuote.quote);
//     setAuthor(randomQuote.author);
//   };

//   return (
//     <>
//       <StatusBar backgroundColor={"#000000"} />
//       <View style={[styles.container]}>
//         <TouchableOpacity onPress={generateRandomQuote}>
//           <View style={styles.actionBtn}>
//             <Text style={styles.actionBtnText}>Generate Random Quote</Text>
//           </View>
//         </TouchableOpacity>
//         <View style={styles.quoteContainer}>
//           <Text style={styles.quoteText}>{quote}</Text>
//           <Text style={styles.authorText}>- {author}</Text>
//         </View>
//       </View>
//     </>
//   );
// }

// export default BgChanger;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//       },
//       actionBtn: {
//         borderRadius: 12,
//         backgroundColor: "#641B4D",
//         paddingVertical: 10,
//         paddingHorizontal: 40,
//         marginBottom: 20,
//       },
//       actionBtnText: {
//         fontSize: 18,
//         color: "#FFFFFF",
//         fontWeight: "bold",
//         textTransform: "uppercase",
//       },
//       quoteContainer: {
//         alignItems: 'center',
//       },
//       quoteText: {
//         fontSize: 20,
//         textAlign: 'center',
//       },
//       authorText: {
//         marginTop: 10,
//         fontSize: 16,
//         fontStyle: 'italic',
//       },
// });
// BgChanger.js

import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Quote = ({ quote, author }) => (
  <View style={styles.quoteContainer}>
    <Text style={styles.quoteText}>{quote}</Text>
    <Text style={styles.authorText}>- {author}</Text>
  </View>
);

const BgChanger = () => {
  const quotesData = [
    { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    // Add more quotes here
  ];

  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const selectRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotesData.length);
    const { quote, author } = quotesData[randomIndex];
    setQuote(quote);
    setAuthor(author);
  };

  // Set initial quote on component mount
  selectRandomQuote();

  return (
    <>
      <StatusBar backgroundColor="#000000" />
      <View style={styles.container}>
        <TouchableOpacity onPress={selectRandomQuote}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnText}>Generate Random Quote</Text>
          </View>
        </TouchableOpacity>
        <Quote quote={quote} author={author} />
      </View>
    </>
  );
}

export default BgChanger;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: "#641B4D",
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginBottom: 20,
  },
  actionBtnText: {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  quoteContainer: {
    alignItems: 'center',
  },
  quoteText: {
    fontSize: 20,
    textAlign: 'center',
  },
  authorText: {
    marginTop: 10,
    fontSize: 16,
    fontStyle: 'italic',
  },
});
