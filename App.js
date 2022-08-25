import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, ImageBackground } from 'react-native';


const resim1 = require('./agness.jpg');
const resim2 = require('./bugsbunny.jpg');
const resim3 = require('./gumball.jpg');
const resim4 = require('./sid.jpg');
const resim5 = require('./tomjerry.jpg');
const resim6 = require('./twity.jpg');

const App = () => {
	
	
	
	const shuffle = (array) => {
		var currentIndex = array.length, temporaryValue, randomIndex;
		while (0 !== currentIndex) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	}

	const [score, setScore] = useState(0);
	const [resimler, setResimler] = useState(shuffle([
		{ bulundu: false, name: 'kutu1', resim: resim1, open: false, id: 'agnes' },
		{ bulundu: false, name: 'kutu2', resim: resim2, open: false, id: 'bugsbunny' },
		{ bulundu: false, name: 'kutu3', resim: resim3, open: false, id: 'gumball' },
		{ bulundu: false, name: 'kutu4', resim: resim4, open: false, id: 'sid' },
		{ bulundu: false, name: 'kutu5', resim: resim5, open: false, id: 'tomjerry' },
		{ bulundu: false, name: 'kutu6', resim: resim6, open: false, id: 'twity' },
		{ bulundu: false, name: 'kutu7', resim: resim1, open: false, id: 'agnes' },
		{ bulundu: false, name: 'kutu8', resim: resim2, open: false, id: 'bugsbunny' },
		{ bulundu: false, name: 'kutu9', resim: resim3, open: false, id: 'gumball' },
		{ bulundu: false, name: 'kutu10', resim: resim4, open: false, id: 'sid' },
		{ bulundu: false, name: 'kutu11', resim: resim5, open: false, id: 'tomjerry' },
		{ bulundu: false, name: 'kutu12', resim: resim6, open: false, id: 'twity' },
	]));

	const onPress = (item, index) => {

		let updatedData = [...resimler];
		updatedData[index].open = !updatedData[index].open;
		setResimler(updatedData);
		const acikOlanlar = updatedData.filter(nesne => nesne.open);

		if (acikOlanlar.length === 2) {
			if (acikOlanlar[0].id === acikOlanlar[1].id) {

				setScore(score + 50);

				let aciklarName = acikOlanlar.map(upitem => {
					return upitem.name
				});

				let sira1 = updatedData.findIndex(upitem => upitem.name === aciklarName[0]);
				let sira2 = updatedData.findIndex(upitem => upitem.name === aciklarName[1]);
				updatedData[sira1].bulundu = true;
				updatedData[sira2].bulundu = true;
				updatedData[sira1].open = false;
				updatedData[sira2].open = false;
				setResimler(updatedData);


				const oyunSonu = updatedData.filter(nesne => nesne.bulundu);
				if ( oyunSonu.length === 12 ){
					alert('OYUN BİTTİ!', 'SKORUNUZ:'+score);
				}


			} else {
				setScore(score - 5);

				setTimeout(() => {
					let aciklarName = acikOlanlar.map(upitem => {
						return upitem.name
					});

					let sira1 = updatedData.findIndex(upitem => upitem.name === aciklarName[0]);
					let sira2 = updatedData.findIndex(upitem => upitem.name === aciklarName[1]);
					updatedData[sira1].open = false;
					updatedData[sira2].open = false;
					setResimler(updatedData);
				}, 100);
			}
		}
	 
}
	return (
		<>

			<StatusBar Style="dark-content" />
			<ImageBackground source={require('./ay.jpg')} style={{ flex: 1 }} >
				<SafeAreaView style={{ flex: 5 }}>

					<View style={styles.bg}>
						<Text style={styles.title}>score: {score} </Text>
						<View style={styles.kutular}>
							{resimler.map((item, index) => (

								<React.Fragment key={index}>
									{item.bulundu ? (
										<View style={styles.box}>
											<Image
												style={styles.tinyLogo}
												source={item.resim} />

										</View>
									) : (
											<TouchableOpacity key={index}
												onPress={() => onPress(item, index)}>
												<View style={styles.box}>
													<Image
														style={styles.tinyLogo}
														source={item.resim} />
													{!item.open && <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: '#251f44' }} />}
												</View>

											</TouchableOpacity>
										)}

								</React.Fragment>

							))}
							
						</View>

					</View>

				</SafeAreaView></ImageBackground>
		</>

	);
}
const styles = StyleSheet.create({
	tinyLogo: {

		width: 100,
		height: 100,
	},

	bg: {

		flex: 2,
	},

	body: {

		height: 1000,
	},


	title: {

		marginTop: 1,
		paddingVertical: 30,
		borderColor: "#20232a",
		borderRadius: 6,
		color: "#d3dbff",
		textAlign: "center",
		fontSize: 30,
		fontWeight: "bold",
	},

	box: {
		height: 110,
		width: 110,
		borderRadius: 8,
		marginTop: 30,
		backgroundColor: "#bbe1fa",
		alignItems: "center",
		justifyContent: "center",
		marginLeft: 10,
		marginRight: 10,
	},
	text: {
		fontSize: 14,
		fontWeight: "bold",
		margin: 4,
		color: "#000",
		textAlign: "center"
	},
	kutular: {

		flexDirection: 'row',
		flexWrap: 'wrap',
		flexBasis: 'auto',
		justifyContent: "center",
	},
	sure: {
		position: 'absolute',
		top: 0,
		right: 0
	},
	netAlert:{
		width:'100%',
		maxHeight: '56%',
		alignSelf:'center'
	},
	netAlertContent: {
		padding: 10,
		marginTop: 20,
	},
	netAlertTitle:{
		fontFamily: 'OpenSans-Bold',
		fontSize: 19,
		color : '#fff',
	},
	netAlertDesc: {
		fontFamily: 'OpenSans-Bold',
		fontSize: 15,
		color : '#fff',
	}
}
);


export default App;