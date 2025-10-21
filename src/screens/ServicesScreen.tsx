import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const services = [
  {
    title: 'Mobile App Development',
    description: 'Custom mobile applications for iOS and Android platforms, built with the latest technologies and best practices.',
  },
  {
    title: 'Web Development',
    description: 'Modern, responsive websites that convert visitors into customers, built with cutting-edge technologies.',
  },
  {
    title: 'SEO Optimization',
    description: 'Improve your website\'s visibility in search engines and drive organic traffic to your business.',
  },
  {
    title: 'Content Marketing',
    description: 'Create engaging content that attracts and retains customers, building brand awareness and trust.',
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces that provide exceptional user experiences.',
  },
  {
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies to grow your online presence and reach your target audience.',
  },
];

const ServicesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Our Services</Text>
        <Text style={styles.subtitle}>
          Comprehensive digital solutions to help your business grow
        </Text>
      </View>

      <View style={styles.servicesContainer}>
        {services.map((service, index) => (
          <View key={index} style={styles.serviceCard}>
            <Text style={styles.serviceTitle}>{service.title}</Text>
            <Text style={styles.serviceDescription}>{service.description}</Text>
          </View>
        ))}
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
  servicesContainer: {
    padding: 20,
  },
  serviceCard: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  serviceDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});

export default ServicesScreen; 