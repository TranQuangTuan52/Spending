import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
// import {VictoryPie} from 'victory-native';
import DatePicker from 'react-native-date-picker';

import {
  // LineChart,
  // BarChart,
  PieChart,
  // ProgressChart,
  // ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

// import RenderItemCat from '../components/renderItemCategoryHome';
const date = new Date();
const currenDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
const {width, height} = Dimensions.get('window');
const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};
export class Home extends Component {
  state = {
    date: new Date(),
    Balance: 52700000,
    visible: false,
    selectedDropdow: 'HOM_NAY',
    dataPie: Object.assign({}),
    // data: [
    //   {
    //     name: 'Shopping',
    //     spending: 100000,
    //     color: 'tomato',
    //     legendFontColor: '#7F7F7F',
    //     legendFontSize: 15,
    //   },
    //   {
    //     name: 'Health',
    //     spending: 300000,
    //     color: 'blue',
    //     legendFontColor: '#7F7F7F',
    //     legendFontSize: 15,
    //   },
    //   {
    //     name: 'Sport',
    //     spending: 50000,
    //     color: 'red',
    //     legendFontColor: '#7F7F7F',
    //     legendFontSize: 15,
    //   },
    //   {
    //     name: 'Girl Friend',
    //     spending: 500000,
    //     color: 'green',
    //     legendFontColor: '#7F7F7F',
    //     legendFontSize: 15,
    //   },
    //   {
    //     name: 'Dissipation',
    //     spending: 100000,
    //     color: 'brown',
    //     legendFontColor: '#7F7F7F',
    //     legendFontSize: 15,
    //   },
    //   {
    //     name: 'Other',
    //     spending: 100000,
    //     color: 'black',
    //     legendFontColor: '#7F7F7F',
    //     legendFontSize: 15,
    //   },
    // ],
    R_E: [
      {
        name: 'Thu',
        value: 1050000,
        color: '#66bb6a',
        legendFontColor: '#7F7F7F',
        legendFontSize: 18,
      },
      {
        name: 'Chi',
        value: 520000,
        color: 'tomato',
        legendFontColor: '#7F7F7F',
        legendFontSize: 18,
      },
    ],
  };
  componentDidMount = () => {};
  renderModalDatePicker() {
    return (
      <Modal visible={this.state.visible} transparent animationType="fade">
        <TouchableWithoutFeedback
          onPress={() => this.setState({visible: false})}>
          <View style={styles.modalOutside}>
            <View style={styles.modalDatePicker}>
              <DatePicker
                textColor="black"
                backgroundColor="white"
                fadeToColor="white"
                date={this.state.date}
                mode="date"
                onDateChange={(date) => {
                  this.setState({date});
                }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
  changeDate(type) {
    const date = this.state.date;
    if (type === 'minus') date.setDate(date.getDate() - 1);
    if (type === 'plus') date.setDate(date.getDate() + 1);
    this.setState({date});
  }
  renderHeader() {
    return (
      <View style={styles.containerHeader}>
        <Icon
          name="menu"
          size={32}
          color="white"
          style={{left: 16, position: 'absolute', top: 6}}
          onPress={() => this.props.navigation.openDrawer()}
        />

        {/* <View style={{marginTop: 55, flexDirection: 'row',justifyContent:'center',}}>
          <Icon
            name="chevron-left"
            style={{marginEnd: 32}}
            size={34}
            color="white"
            onPress={() => this.changeDate('minus')}
          />
          <Text
            style={{fontSize: 26, color: 'white'}}
            onPress={() =>
              this.setState({visible: true})
            }>{`${this.state.date.getDate()}-${this.state.date.getMonth()}-${this.state.date.getFullYear()}`}</Text>
          <Icon
            name="chevron-right"
            style={{marginStart: 32}}
            size={34}
            color="white"
            onPress={() => this.changeDate('plus')}
          />
        </View> */}
        {/* <Image
          source={require('../assets/images/avatar.jpg')}
          style={{
            width: 40,
            height: 40,
            position: 'absolute',
            right: 8,
            top: 8,
            borderRadius: 8,
          }}
        /> */}
        <Icon
          style={{
            // width: 40,
            // height: 40,
            position: 'absolute',
            right: 8,
            top: 8,
            //borderRadius: 8,
          }}
          name="bell"
          size={30}
          color="white"
        />
      </View>
    );
  }
  renderCategory = () => {
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{alignItems: 'stretch', marginTop: 100}}
        numColumns={4}
        data={this.state.data}
        renderItem={({item}) => {
          return (
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: 2,
                marginHorizontal: 16,
              }}>
              <Text style={{marginVertical: 6, color: 'black'}}>
                {item.name}
              </Text>
              <TouchableOpacity
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  justifyContent: 'center',
                  backgroundColor: item.color,
                  alignItems: 'center',
                  elevation: 4,
                }}>
                <Image
                  source={require(`../assets/icons/food.png`)}
                  style={{width: 30, height: 30}}
                />
              </TouchableOpacity>
              <Text style={{marginVertical: 6, color: item.color}}>
                {item.spending}
              </Text>
            </View>
          );
        }}
      />
    );
  };
  renderPieChart() {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: 100,
          width: 100,
          backgroundColor: '#ffff',
          marginHorizontal: 32,
          marginVertical: 6,
          borderRadius: 18,
          elevation: 4,
          // top: 90,
          // left: 0,
          // right: 0,
          alignContent: 'center',
        }}>
        {/* <VictoryPie
          cornerRadius={({datum}) => datum.y * 5}
          width={width}
          height={250}
          data={this.state.dataPie}
          colorScale={['red', 'blue', 'green', 'tomato']}/> */}

        <PieChart
          data={this.state.R_E}
          width={100}
          height={100}
          chartConfig={chartConfig}
          accessor={'value'}
          backgroundColor={'transparent'}
          //paddingLeft={'15'}
        />
      </View>
    );
  }
  renderAccountBalance() {
    return (
      <View style={styles.containerAccoutBalance}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            left: 16,
            top: 6,
          }}>
          <Text style={{fontSize: 16}}>Số Dư Tài khoản</Text>
          <Icon
            name="chevron-right"
            style={{marginEnd: 32}}
            size={18}
            color="black"
          />
        </View>
        <Text
          style={{
            fontSize: 30,
            left: 16,
            top: 16,
            fontWeight: 'bold',
            color: 'rgb(21, 34, 56)',
          }}>
          $ {this.state.Balance}
        </Text>
      </View>
    );
  }
  PieChartRE() {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: 120,
          width: 230,
          marginVertical: 6,
          alignContent: 'center',
        }}>
        <PieChart
          data={this.state.R_E}
          width={230}
          height={120}
          chartConfig={chartConfig}
          accessor={'value'}
          backgroundColor={'transparent'}
        />
      </View>
    );
  }
  renderDropdow() {
    return (
      <DropDownPicker
        items={[
          {
            label: 'Hôm nay',
            value: 'HOM_NAY',
            //  icon: () => <Icon name="flag" size={18} color="#900" />,
            hidden: true,
          },
          {
            label: 'Tuần này',
            value: 'THANG_NAY',
            // icon: () => <Icon name="flag" size={18} color="#900" />,
          },
          {
            label: 'Tháng này',
            value: 'THANG_NAY',
            // icon: () => <Icon name="flag" size={18} color="#900" />,
          },
          {
            label: 'Năm này',
            value: 'NAM_NAY',
            //icon: () => <Icon name="flag" size={18} color="#900" />,
          },
        ]}
        defaultValue={this.state.selectedDropdow}
        containerStyle={{height: 40, width: 150}}
        style={{backgroundColor: '#ffff'}}
        itemStyle={{
          justifyContent: 'flex-start',
        }}
        dropDownStyle={{backgroundColor: '#ffff', elevation: 2, height: 145}}
        onChangeItem={(item) =>
          this.setState({
            selectedDropdow: item.value,
          })
        }
      />
    );
  }
  renderRevenueExpenditure() {
    return (
      <View
        style={{
          marginTop: 50,
          borderRadius: 8,
          // borderWidth: 1,
          elevation: 2,
          height: 200,
          backgroundColor: '#23395d',
          // justifyContent: 'center',
          marginHorizontal: 8,
        }}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              height: 32,
              paddingStart: 4,
              backgroundColor: '#ffff',
              borderTopLeftRadius: 8,
              elevation: 2,
              borderBottomRightRadius: 4,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 18, color: 'black'}}>Thu chi: </Text>
          </View>
          <View style={{position: 'absolute', right: 8, top: 8}}>
            {this.renderDropdow()}
          </View>
        </View>

        {/*  */}
        <View
          style={{flexDirection: 'row', marginTop: 12, alignItems: 'center'}}>
          {this.PieChartRE()}
          <View
            style={{
              marginStart: 64,
              marginTop: 12,
              borderRadius: 4,
              elevation: 1,
              width: 100,
              height: 120,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 18,
                marginTop: 10,
                color: this.state.R_E[0].color,
              }}>
              {this.state.R_E[0].value}
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: this.state.R_E[1].color,
                marginTop: 12,
              }}>
              {this.state.R_E[1].value}
            </Text>
            <View
              style={{
                width: 80,
                height: 1,
                backgroundColor: 'gray',
                marginVertical: 4,
                opacity: 0.5,
              }}
            />
            <Text
              style={{
                fontSize: 18,
                color:
                  this.state.R_E[0].value - this.state.R_E[1].value > 0
                    ? '#66bb6a'
                    : 'tomato',
              }}>
              {this.state.R_E[0].value - this.state.R_E[1].value}
            </Text>
          </View>
        </View>
      </View>
    );
  }
  renderDasboard() {
    return (
      <View style={styles.containerDasboard}>
        {/* row */}
        <View style={{flexDirection: 'row'}}>
          <View style={styles.itemDasboard}>
            <Icon name="chart-pie" size={42} color="#29b6f6" />
            <Text style={{marginTop: 6}}>Phân Tích Thu Chi</Text>
          </View>
          <View style={styles.itemDasboard}>
            <Icon name="chart-line" size={42} color="#29b6f6" />
            <Text style={{marginTop: 6}}>Phân Tích Tài Chính</Text>
          </View>
        </View>
          {/* row */}
          <View style={{flexDirection: 'row'}}>
          <View style={styles.itemDasboard}>
            <Icon name="poll" size={42} color="#29b6f6" />
            <Text style={{marginTop: 6}}>Theo Dõi Vay Nợ</Text>
          </View>
          <View style={styles.itemDasboard}>
            <Icon name="calendar" size={42} color="#29b6f6" />
            <Text style={{marginTop: 6}}>Sự kiện</Text>
          </View>
        </View>
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        {this.renderModalDatePicker()}
        {this.renderHeader()}
        {this.renderAccountBalance()}

        <ScrollView>
          {this.renderRevenueExpenditure()}
          {this.renderDasboard()}
        </ScrollView>

        {/* {this.renderPieChart()} */}
        {/* <View style = {{alignItems:'center'}}>
       {this.renderCategory()}
       </View> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    elevation: 4,
    backgroundColor: '#efebe9',
  },
  containerHeader: {
    paddingBottom: 6,
    elevation: 1,
    backgroundColor: '#42a5f5',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 90,
    // borderBottomEndRadius: 18,
    // borderBottomStartRadius: 18,
  },
  modalOutside: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    width: width,
    height: height,
  },
  modalDatePicker: {
    paddingTop: 200,
    alignItems: 'center',
    width: width,
    height: height,
  },
  containerAccoutBalance: {
    height: 80,
    position: 'absolute',
    backgroundColor: '#ffff',
    marginHorizontal: 8,
    marginVertical: 6,
    borderRadius: 9,
    elevation: 4,
    top: 40,
    left: 0,
    right: 0,
  },
  containerDasboard: {
    width: width,
    height: 500,
    elevation: 2,
    marginTop: 12,
    alignItems: 'center',
  },
  itemDasboard: {
    width: 195,
    height: 100,
    borderRadius: 4,
    marginTop: 6,
    elevation: 1,
    marginHorizontal: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffff',
  },
});
export default Home;
