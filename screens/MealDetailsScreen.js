import {Text, View, ScrollView, Image, StyleSheet} from 'react-native';
import {MEALS} from '../data/dummy-data';
import MealDetails from '../components/MealDetails';

function MealDetailsScreen({route}) {

    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    return (
        <View>
            <Image style={styles.image} source={{uri: selectedMeal.imageUrl}}/>
            <ScrollView style={styles.container}>
                <Text style={styles.title}>{selectedMeal.title}</Text>
                <MealDetails
                    duration={selectedMeal.duration}
                    complexity={selectedMeal.complexity}
                    affordability={selectedMeal.affordability}
                    textStyle={styles.detailText}
                />
                <Text style={styles.subtitle}>Ingredients</Text>
                {selectedMeal.ingredients.map(ingredient => <Text key={ingredient}>{ingredient}</Text>)}
                <Text style={styles.subtitle}>Steps</Text>
                {selectedMeal.steps.map(step => <Text key={step}>{step}</Text>)}
            </ScrollView>
        </View>
    );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
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
    subtitle: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        padding: 6,
        margin: 6,
        textAlign: 'center',
        borderBottomColor: '#e2b497',
        borderBottomWidth: .75
    }
})
