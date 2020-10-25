import React from 'react';
import {View,  StyleSheet} from 'react-native';


import {
    
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    Switch,
    TouchableRipple,

} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export function DrawerContent(props) {
   
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={StyleSheet.userInfoSection}>
                        <View style={{flexDirection:'row', marginTop: 15, marginLeft:12}}>
                            <Avatar.Image
                                source={{
                                uri: "https://i.pinimg.com/736x/e2/c3/3a/e2c33a165e739b8172527a3d2090069a.jpg",
                            }}
                                size={50}
                        
                        
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>Lambert iGEM</Title>
                                <Caption style={styles.caption}>@lambertiGEM</Caption>
                        </View>
                        </View>
                        <View style={styles.row}>
                        <View style={styles.section}>
                            <View style={{paddingLeft:7}}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>System Health: </Paragraph>
                                <Caption style={styles.caption}>Level 3</Caption>
                                </View>
                            </View>

                            
                        </View>
                        
    
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 

                            icon={({color, size}) => (
                                <Icon 
                                name="account-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('ProfileScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="camera-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Gallery"
                            onPress={() => {props.navigation.navigate('Login')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="bookmark-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="More Settings"
                            onPress={() => {props.navigation.navigate('Map')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Support"
                            onPress={() => {props.navigation.navigate('Map')}}
                        />
                       
                       
                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                <Switch
                                   // value={theme.mode === 'dark'}
                                    //onValueChange={value => theme.setMode(value ? 'dark' : 'light')}
                                />
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>

                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
            <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                   // onPress={}
                />

            </Drawer.Section>
            
        </View>
    )
    

}
const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });