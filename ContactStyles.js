import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txtHeader: {
    fontSize: 23,
    fontWeight: '500',
    textAlign: 'center',
    marginVertical: 15,
  },
  viewSepratorStyle: {
    height: 2,
    backgroundColor: 'gray',
    margin: 5,
  },
  viewContactList: {
    flexDirection: 'row',
    margin: 10,
  },
  sepratorStyle: {
    height: 1,
    width: '90%',
    backgroundColor: '#DEDEDE',
  },
  imgContactList: {
    width: 60,
    aspectRatio: 1,
    borderRadius: 30,
  },
  txtContactList: {
    fontSize: 18,
    color: 'black',
    marginTop: 5,
    marginLeft: 15,
  },
  txtPhoneNumber: {
    fontSize: 15,
    color: 'black',
    marginTop: 5,
    marginLeft: 15,
  },
  viewCheckMarkStyle: {
    width: 20,
    height: 20,
    margin: 15,
  },
  viewSelectedContactList: {
    margin: 10,
    alignItems: 'center',
    width: 70,
  },
  imgSelected: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  imgCancelStyle: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  txtSelectedContact: {
    fontSize: 15,
    color: 'black',
    marginTop: 15,
  },
  viewSearch: {
    backgroundColor: 'rgb(202,201,207)',
  },
  viewCloseStyle: {
    position: 'absolute',
    right: 0,
    width: 25,
    height: 25,
  },
  searchInput: {
    width: '96%',
    marginHorizontal: '2%',
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: 'white',
    padding: 0,
    paddingVertical: 10,
    paddingLeft: 20,
    fontSize: 18,
  },
  nameContainer: {
    flexDirection: 'column',
    width: '60%',
  },
  loading: {
    position: 'absolute',
    backgroundColor: 'black',
    opacity: 0.2,
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
