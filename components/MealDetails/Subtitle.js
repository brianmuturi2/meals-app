import {Text, StyleSheet} from 'react-native';

function Subtitle({children}) {
    return <Text style={styles.subtitle}>{children}</Text>;
}

export default Subtitle;

const styles = StyleSheet.create({
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
