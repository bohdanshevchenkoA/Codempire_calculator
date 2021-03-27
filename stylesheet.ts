import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    resultPanel: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingBottom: '15%'
    },
    resultPanelText: {
        fontSize: 60,
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
    buttonLabel: {
        fontSize: 30
    }
});