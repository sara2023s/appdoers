import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const AboutScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>About AppDoers</Text>
        <Text style={styles.subtitle}>
          Transforming businesses through innovative digital solutions
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Mission</Text>
          <Text style={styles.sectionText}>
            At AppDoers, we are committed to helping businesses thrive in the digital age.
            Our mission is to provide cutting-edge digital solutions that drive growth,
            increase efficiency, and create lasting value for our clients.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Vision</Text>
          <Text style={styles.sectionText}>
            We envision a world where every business has access to the digital tools
            and expertise they need to succeed. Through innovation, collaboration,
            and a commitment to excellence, we strive to be the leading digital
            transformation partner for businesses worldwide.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Values</Text>
          <View style={styles.valueItem}>
            <Text style={styles.valueTitle}>Innovation</Text>
            <Text style={styles.valueText}>
              We constantly explore new technologies and approaches to deliver
              cutting-edge solutions.
            </Text>
          </View>
          <View style={styles.valueItem}>
            <Text style={styles.valueTitle}>Excellence</Text>
            <Text style={styles.valueText}>
              We maintain the highest standards in everything we do, from code
              quality to customer service.
            </Text>
          </View>
          <View style={styles.valueItem}>
            <Text style={styles.valueTitle}>Collaboration</Text>
            <Text style={styles.valueText}>
              We work closely with our clients to understand their needs and
              deliver solutions that exceed expectations.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    backgroundColor: '#007AFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.9,
  },
  content: {
    padding: 20,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  sectionText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  valueItem: {
    marginBottom: 20,
  },
  valueTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#007AFF',
  },
  valueText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});

export default AboutScreen; 