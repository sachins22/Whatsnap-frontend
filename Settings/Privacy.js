import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons'

export default function Privacy() {
  return (
   <>
   <SafeAreaView style={styles.Container}>
   <View style={styles.Main}>
<View style={styles.Header}>
    <TouchableOpacity>
    <AntDesign name="arrowleft" size={24} color="black" />
    </TouchableOpacity>
    <Text style={styles.HeaderText}>Privacy Policy</Text>
</View>
<ScrollView>
    <View style={styles.FirstMain}>
    <Text style={styles.Text}>Who can see my personal info</Text>
    <TouchableOpacity>
        <Text style={styles.Text}>last seen and online</Text>
        <Text>Nobody</Text>
    </TouchableOpacity>
    <TouchableOpacity>
        <Text style={styles.Text}>Profile photo</Text>
        <Text>Everyone</Text>
    </TouchableOpacity>
    <TouchableOpacity>
        <Text style={styles.Text}>About</Text>
        <Text>Everyone</Text>
    </TouchableOpacity>
    <TouchableOpacity>
        <Text style={styles.Text}>Status</Text>
        <Text>25 contact selected</Text>
    </TouchableOpacity>
    <View style={styles.FirstPart}>
        <Text style={styles.FirstPartMainText}>Read receipts</Text>
        <TouchableOpacity>
        <View style={styles.Button}>
            <View style={styles.Button}></View>
        </View>
        </TouchableOpacity>
        <Text>If turned off, you won't send or receive</Text>
        <Text>Read receipts. Read receipts are always </Text>
        <Text>sent for group chats</Text>
    </View>
    <View style={styles.SecMain}>
        <Text style={styles. SecMainText}>Disappearing messages</Text>
        <TouchableOpacity>
        <Text style={styles. SecMainText1}>Default message timer</Text>
        <Text style={styles.leftText}>off</Text>
        <Text style={styles. SecMainText2}>Start new chats with disappearing </Text>
        <Text style={styles. SecMainText2}>messages set to timer </Text>
        </TouchableOpacity>
        </View>
        <View style={styles.ThirdMain}>
            <TouchableOpacity>
                <Text style={styles.ThirdMainText}>Group </Text>
                <Text style={styles.ThirdText}>My contact </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.ThirdMainText}>Live location </Text>
                <Text style={styles.ThirdText}>None </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.ThirdMainText}>Calls </Text>
                <Text style={styles.ThirdText}>Silence unknown Callers </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.ThirdMainText}>Blocked contacts </Text>
                <Text style={styles.ThirdText}>12 </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.ThirdMainText}>Chat lock </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.ThirdMainText}>Advanced </Text>
                <Text style={styles.ThirdText}>Protect IP address in call, Disable link previews</Text>
            </TouchableOpacity>
        </View>
    </View>
</ScrollView>
</View>

   </SafeAreaView>
   </>
  )
}

const styles = StyleSheet.create({})