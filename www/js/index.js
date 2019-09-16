/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    generateTitle: function() {
        var titleArray = ['Online Appointment System', 
        				  'Android Based Election System for School Organization',
        				  'Parking Lot Management System with RFID',
        				  '3D Visualization of Conic Sections in XNA Game Programming Framework',
        				  '3D Immersive Environment for Visualizing Robot Sensor Data',
        				  'A Collaborative Web Based Genome Browser for Large Scale Epigenomic Analysis',
        				  'Dynamic Approach for E-Commerce System Using Wordpress',
        				  'A Household Mobile Robot',
        				  'Mobile Application To Aid Consumers in Accessing Cost Effectiveness in Their Automobile',
        				  'A Mobile Device Controlled Blood Pressure Monitor',
        				  'A Mobile Tool about Causes and Distribution of Dramatic Natural Phenomena',
        				  'A New Linux Based Operating System',
        				  'Voice Recognition in Linux Based Operating System',
        				  'Preferential Voting System As A Collaborative Software Solution',
        				  'A System to Assist with Teaching Allocation',
        				  'Adaptive E-Learning for School',
        				  'Advertisement Management System',
        				  'Airline Reservation System',
        				  'AJAX Based Event Calendar for Course Management System',
        				  'Android Application for Crime Analysis',
        				  'Efficient Location Information Management System for Smartphone',
        				  'Intelligent Healthcare Data Management System for Mobile Environment',
        				  'Interactive Mitochondrial Database',
        				  'Analysis and Debugging Techniques of Android Platform',
        				  'Android Application for Library Resource Access',
        				  'Android Based Menu Ordering App',
        				  'Android Based Student Handbook',
        				  'Android Joystick Application using Bluetooth',
        				  'Android Mobile Quiz Game',
        				  'Android Based Class Attendance Monitoring Application Using QR Code',
        				  'Automated Business Permit Issuance System',
        				  'Automated Water Dispenser using IOT Technologies',
        				  'Automation of Android Application Bug Tracing Mechanism',
        				  'Billing System',
        				  'Bioinformatics of the Immune System',
        				  'Book Catalog Application using Android',
        				  'Barangay Certificate Issuance and Record Management System',
        				  'Barangay Management Information System',
        				  'Web Content Management System',
        				  'Camera Based Heart Rate Detector',
        				  'Cashiering and Queuing System',
        				  'Cemetery Mapping and Information System',
        				  'Class Scheduling System',
        				  'Class Time Table using Android',
        				  'Classroom Management System',
        				  'Client Based Guidance and Couseling System',
        				  'Cognitive Vision using OpenCV',
        				  'Computer Laboratory Time Management System',
        				  'Computer Aided Instruction with Voice Recognition System',
        				  'Computerized Assessment of School Fees',
        				  'Online Faculty Evaluation System',
        				  'Course Recommendation System for College Students',
        				  'Cystic Fibrosis Patient Monitoring Application',
        				  'Design and Implementation of Workflow Content Management System',
        				  'Daily Time Record System',
        				  'Daily Time Record System with Biometrics',
        				  'E-Commerce with PayPal Integration',
        				  'E-Learning System for University',
        				  'E-Voting System with SMS Technologies',
        				  'Ordering System using Web Technologies',
        				  'Electronic Police Clearance System',
        				  'Employee Ranking System',
        				  'Online Enrollment System',
        				  'Entrance Examination System for University',
        				  'Event Planner with SMS Technologies',
        				  'Examination Scheduling System',
        				  'Face Recognition System',
        				  'Faculty Information System',
        				  'Fine Grained Location using Mobile Augmented Reality',
        				  'Fire and Smoke System with SMS Notification',
        				  'First Aid App for Android Application',
        				  'Fish Information System',
        				  'Flood Monitoring with GPRS Technologies using Google Earth API',
        				  'Game Design Project',
        				  'Automated Inventory System',
        				  'Grade Viewer Application in Android',
        				  'Grading System',
        				  'Herbal Plants Information System',
        				  'High School Record System',
        				  'Hospital Management System',
        				  'Hotel and Reservation System',
        				  'Hotel Reservation Application with Mobile Compatibility',
        				  'Human Resource Management and Information System',
        				  'Lending Management System',
        				  'Medical and Dental Record Management System',
        				  'Medicine Inventory System',
        				  'Mobile Educational Application for Elementary Students',
        				  'Point of Sale Management System',
        				  'Motorcycle Tracking with GPS using Android',
        				  'Online Alumni Information and Management System',
        				  'Online Alumni Tracer',
        				  'Financial Management System for School Organization',
        				  'Payroll Management System with Biometrics',
        				  'Parish Record Management System',
        				  'Pharmacy Automation and Management System',
        				  'Plant Leaf Recognition and Matching Using OpenCV',
        				  'Suspect Recognition Surveillance with Face Recognition',
        				  'Resort Management System',
        				  'RFID Based Students Monitoring System',
        				  'Road Traffic Estimation using Wireless Communication',
        				  'Safety Notification Broadcast System',
        				  'School Event Attendance Monitoring System with QR Code',
        				  'SMS Based Grade Inquiry System',
        				  'SSG Management System with SMS Notification',
        				  'Student Assessment System',
        				  'Student Monitoring using Fingerprint with SMS Notification',
        				  'Queuing System using Barcode Technologies',
        				  'Thesis Archiving System',
        				  'Touch Screen Based Point of Sale System',
        				  'Vehicle Plate Number Recognition System',
        				  'Canteen Automation System using Android',
        				  'Android Smart Ticketing System using RFID',
        				  'Financial Status Analysis using Credit Score Rating Based On Android',
        				  'Android Based Self Attendance System',
        				  'Automated Canteen Ordering System',
        				  'Wearable Healt Monitoring System',
        				  'Voice Controlled Home Automation',
        				  'Child Monitoring System with IOT',
        				  'Android Geo Fencing Project'

        ];
        
        var randomTitle = Math.floor(Math.random()*titleArray.length);

        $('#thesis-title').replaceWith('<b id="thesis-title">'+ titleArray[randomTitle] +'</b>');
    },

    onDeviceReady: function() {
        $('#generator').click(this.generateTitle);
    }

};

app.initialize();