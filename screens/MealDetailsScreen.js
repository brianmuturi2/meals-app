import {useContext, useLayoutEffect} from 'react';
import {Text, View, ScrollView, Image, StyleSheet, Button} from 'react-native';
import {MEALS} from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetails/Subtitle';
import List from '../components/MealDetails/List';
import IconButton from '../components/IconButton';
import {FavoritesContext} from '../store/context/favorites-context';

function MealDetailsScreen({route, navigation}) {

    const favoriteMealCtx = useContext(FavoritesContext);

    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    const mealIsFavorite = favoriteMealCtx.ids.includes(mealId);

    function changeFavoriteStatusHandler() {
        if (mealIsFavorite) {
            favoriteMealCtx.removeFavorite(mealId);
        } else {
            favoriteMealCtx.addFavorite(mealId);
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton
                        onPress={changeFavoriteStatusHandler}
                        icon={mealIsFavorite ? 'star' : 'star-outline'}
                        color={'white'}
                    />
                );
            }
        });
    }, [navigation, changeFavoriteStatusHandler]);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.rootContainer}>
                <Image style={styles.image} source={{uri: selectedMeal.imageUrl}}/>
                <Text style={styles.title}>{selectedMeal.title}</Text>
                <MealDetails
                    duration={selectedMeal.duration}
                    complexity={selectedMeal.complexity}
                    affordability={selectedMeal.affordability}
                    textStyle={styles.detailText}
                />
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List list={selectedMeal.ingredients}/>
                    <Subtitle>Steps</Subtitle>
                    <List list={selectedMeal.steps}/>
                </View>
            </View>
        </ScrollView>
    );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 40
    },
    image: {
        width: '100%',
        height: 350
    },
    container: {
        padding: 24
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailText: {
        color: 'white'
    },
    listContainer: {
        maxWidth: '100%'
    }
})
