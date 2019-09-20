import { StyleSheet, Dimensions } from 'react-native';
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');
import { getStatusBarHeight } from 'react-native-status-bar-height';
const heightSB = getStatusBarHeight();

const styles = StyleSheet.create({
    header: {
        marginTop: heightSB,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
    },
    headerText: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: WIDTH - 100,
        marginLeft: 8,
        marginRight: 8,
    },
    headerName1: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    headerName2: {
        fontSize: 10,
    },
    headerEditText: {
        color: '#0099ff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    headerEdit: {
        width: 60,
    },
    image: {
        height: HEIGHT - heightSB - 50,
    },
    photo: {
        backgroundColor: 'green',
        height: HEIGHT - heightSB - 120,
    },
    likemassage: {
        height: 50,
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: "center",
    },
    like: {
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: "center",
        width: WIDTH / 2 - 10
    },
    likeText: {
        fontSize: 16,
        color: 'grey',
    },
    message: {
        flexDirection: "row",
        justifyContent: 'flex-end',
        alignItems: "center",
        width: WIDTH / 2 - 20
    },
    messageText: {
        fontSize: 16,
        color: 'grey',
    },
    icon: {
        marginLeft: 10,
        marginRight: 10,
    },
    circle: {
        width: 20,
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: "center",
    },
    browsing: {
        height: 20,
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: "center",
    },
    browsingText: {
        marginLeft: 5,
        color:'grey'
    },
    browsingTextBold: {
        fontWeight: 'bold',
        color:'black'
    },
    product:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'stretch',
    },
    discuss: {
        width: WIDTH-40,
        height: 40,
        backgroundColor:'#0099ff',
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 20,
        marginTop:10,
        marginBottom: 10,
    },
    discussText: {
        color:'white',
        fontWeight:'bold',
        textAlign:'center'
    },
    part: {
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: "center",
    },
    tag:{
        marginTop: 10
    },
    productText:{
        marginTop: 10,
        marginLeft: 10,
        fontSize: 20,
        fontWeight:'bold'
    },
    input:{
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        margin: 10,
    },
    inputText:{
        width: WIDTH-55,
        height: 40,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5,
    },
    course:{
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: "center",
    },
    courseText:{
        marginLeft: 10,
        fontSize: 14,
        fontWeight:'bold',
        marginRight: 5,
    },
    text:{
        backgroundColor:'#E8E8E8',
        marginLeft: 10,
        marginTop: 5,
        fontSize: 16,
        textAlign: 'center',
        textAlignVertical:'center',
        width: 80,
        height: 30,
        borderRadius: 10,
    },
    rubText:{
        marginLeft: 5,
        fontSize: 14,
    },
})
export default styles;