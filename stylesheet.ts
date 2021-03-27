import { StyleSheet, Appearance, Dimensions } from 'react-native';

const colorScheme = Appearance.getColorScheme();
const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40
    },
    resultPanel: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingBottom: '15%'
    },
    resultPanelText: {
        fontSize: 60,
        color: colorScheme === 'light' ? 'black' : 'white',
        paddingHorizontal: 30
    },
    buttonRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: '3%',
        paddingBottom: '20%'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        height: windowWidth / 5,
        width: windowWidth / 5
    },
    buttonZero: {
        width: (windowWidth / 5) * 2.22,
        paddingRight: 100
    },
    buttonLabel: {
        fontSize: 30,
        color: 'white'
    }
});

export const colors = StyleSheet.create({
    dark: {
        backgroundColor: '#333333'
    },
    orange: {
        backgroundColor: '#ff9a0a'
    },
    light: {
        backgroundColor: '#a5a5a5'
    }
})