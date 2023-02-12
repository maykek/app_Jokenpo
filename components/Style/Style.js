import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

/********** TELA DE LOGIN **********/ 
    img:{
        width: 200,
        height: 200
    },
    title:{
        paddingTop: '5%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    login:{
        backgroundColor: '#e9e9e9',
        paddingTop: '20%',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    inp:{
        borderBottomWidth: 2,
        width: '65%',
        borderColor: '#F27405',
        padding: 2,
        textAlign: 'center',
        margin: 5,
        textWeight: 'bold'
    },
    button:{
        width: '65%',
        height: '4%',
        backgroundColor: "#F27405",
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    icon:{
        width: 40, 
        height: 40, 
        margin: 2
    },
})