import {Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
const WIDTH = Dimensions.get('window').width;
export default EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: '$white',
  },
  titleContainer: {
    padding: 16,
    backgroundColor: '$white',
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '$black',
  },
  listWrapper: {
    paddingTop: 20,
    backgroundColor: '$bgColorTwo',
  },
  itemWrapper: {
    width: '100%',
    flexDirection: 'column',
    minHeight: 140,
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  itemInner: {
    backgroundColor: '$white',
    width: '100%',
    minHeight: 140,
    borderRadius: 8,
    alignItems: 'center',
  },
  topSideWrapper: {
    minHeight: 80,
    width: '100%',
    backgroundColor: '$white',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    padding: 16,
  },
  bottomSideWrapper: {
    position: 'relative',
    height: 60,
    width: '100%',
    backgroundColor: '$white',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  leftCutPoint: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: -10,
    left: -10,
    borderRadius: 10,
    backgroundColor: '$bgColorTwo',
  },
  rightCutPoint: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: -10,
    right: -10,
    borderRadius: 10,
    backgroundColor: '$bgColorTwo',
  },
  voucherInfoContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
  },
  voucherImgWrapper: {
    // width: 64,
    // height: 64,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
    flex: 1,
  },
  voucherImg: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  voucerDetailWrapper: {
    flex: 4,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginLeft: 10,
    width: '100%',
  },

  brandName: {
    fontSize: 13,
    lineHeight: 16,
    fontWeight: '400',
    color: '$lightGray',
  },
  voucherDetail: {
    fontSize: 14,
    fontWeight: '500',
    color: '$black',
    marginTop: 5,
    width: '100%',
    lineHeight: 20,
  },
  expiredDate: {
    fontSize: 13,
    color: '$lightGray',
    fontWeight: '200',
  },
  takeButton: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 4,
    backgroundColor: '$purple',
  },
  buttonText: {
    color: '$white',
    fontSize: 14,
    fontWeight: '500',
  },
});
