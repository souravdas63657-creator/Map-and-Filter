const students = [
  { name: "Aarav Sharma", marks: 88, class: "10A", address: "12 Park Street, Kolkata" },
  { name: "Diya Chatterjee", marks: 94, class: "12A", address: "45 GT Road, Howrah" },
  { name: "Rohan Verma", marks: 72, class: "9B", address: "78 Connaught Place, New Delhi" },
  { name: "Ananya Iyer", marks: 65, class: "8A", address: "19 Anna Nagar, Chennai" },
  { name: "Kabir Malhotra", marks: 91, class: "11A", address: "204 Bandra West, Mumbai" },
  { name: "Sneha Mukherjee", marks: 53, class: "10B", address: "33 Salt Lake Sector 2, Kolkata" },
  { name: "Vikram Patel", marks: 79, class: "12B", address: "56 Navrangpura, Ahmedabad" },
  { name: "Meera Nair", marks: 84, class: "11B", address: "14 MG Road, Kochi" },
  { name: "Arjun Reddy", marks: 61, class: "9A", address: "89 Jubilee Hills, Hyderabad" },
  { name: "Ishita Banerjee", marks: 97, class: "12A", address: "21 Ballygunge Circular Rd, Kolkata" },
  { name: "Siddharth Joshi", marks: 58, class: "8B", address: "67 Kothrud, Pune" },
  { name: "Priya Sen", marks: 76, class: "10A", address: "108 Shibpur Road, Howrah" },
  { name: "Aditya Kulkarni", marks: 82, class: "11A", address: "42 Indiranagar, Bengaluru" },
  { name: "Kavya Menon", marks: 69, class: "9B", address: "15 Panampilly Nagar, Kochi" },
  { name: "Devansh Gupta", marks: 95, class: "12B", address: "90 Civil Lines, Jaipur" },
  { name: "Riya Das", marks: 51, class: "8A", address: "7 Liluah Station Road, Howrah" },
  { name: "Karan Singh", marks: 86, class: "10B", address: "34 Sector 17, Chandigarh" },
  { name: "Neha Agarwal", marks: 74, class: "11B", address: "51 Hazratganj, Lucknow" },
  { name: "Pranav Deshmukh", marks: 63, class: "9A", address: "28 Shivajinagar, Pune" },
  { name: "Tanvi Roy", marks: 90, class: "12A", address: "64 Dum Dum Road, Kolkata" },
  { name: "Yash Tiwari", marks: 55, class: "8B", address: "11 Arera Colony, Bhopal" },
  { name: "Pooja Krishnan", marks: 81, class: "10A", address: "73 Adyar, Chennai" },
  { name: "Nikhil Bose", marks: 77, class: "11A", address: "29 Behala Chowrasta, Kolkata" },
  { name: "Shreya Rao", marks: 67, class: "9B", address: "82 Koramangala, Bengaluru" },
  { name: "Aryan Ghosh", marks: 99, class: "12B", address: "4 Belur Math Road, Howrah" },
  { name: "Sanya Kapoor", marks: 52, class: "8A", address: "119 Rohini Sector 9, New Delhi" },
  { name: "Harshvardhan Mehta", marks: 89, class: "10B", address: "37 Satellite Road, Ahmedabad" },
  { name: "Aditi Mishra", marks: 71, class: "11B", address: "60 Gomti Nagar, Lucknow" },
  { name: "Varun Choudhary", marks: 60, class: "9A", address: "25 Malviya Nagar, Jaipur" },
  { name: "Nandini Dutta", marks: 93, class: "12A", address: "88 New Town Action Area 1, Kolkata" },
  { name: "Manish Yadav", marks: 56, class: "8B", address: "16 Boring Road, Patna" },
  { name: "Ritika Saxena", marks: 83, class: "10A", address: "49 Vijay Nagar, Indore" },
  { name: "Abhishek Thakur", marks: 75, class: "11A", address: "31 Mall Road, Shimla" },
  { name: "Swati Pillai", marks: 64, class: "9B", address: "70 Kowdiar, Thiruvananthapuram" },
  { name: "Gaurav Sengupta", marks: 96, class: "12B", address: "18 Tollygunge Phari, Kolkata" },
  { name: "Simran Kaur", marks: 50, class: "8A", address: "94 Model Town, Ludhiana" },
  { name: "Rajeshwar Sinha", marks: 87, class: "10B", address: "22 Kankarbagh, Patna" },
  { name: "Anjali Nambiar", marks: 70, class: "11B", address: "53 Whitefield, Bengaluru" },
  { name: "Tushar Bansal", marks: 62, class: "9A", address: "41 Rajouri Garden, New Delhi" },
  { name: "Poulomi Saha", marks: 92, class: "12A", address: "13 Salkia School Road, Howrah" },
  { name: "Deepak Chauhan", marks: 54, class: "8B", address: "76 Rajpur Road, Dehradun" },
  { name: "Surbhi Jain", marks: 80, class: "10A", address: "39 Palasia, Indore" },
  { name: "Kunal Bhardwaj", marks: 78, class: "11A", address: "85 DLF Phase 2, Gurugram" },
  { name: "Madhuri Gokhale", marks: 66, class: "9B", address: "27 Dadar West, Mumbai" },
  { name: "Soham Chakraborty", marks: 98, class: "12B", address: "55 Gariahat Road, Kolkata" },
  { name: "Bhavna Shetty", marks: 57, class: "8A", address: "62 Hampankatta, Mangaluru" },
  { name: "Rishabh Pandey", marks: 85, class: "10B", address: "91 Sigra, Varanasi" },
  { name: "Kritika Dubey", marks: 73, class: "11B", address: "38 Civil Lines, Prayagraj" },
  { name: "Omkar Sawant", marks: 68, class: "9A", address: "47 Powai, Mumbai" },
  { name: "Trisha Paul", marks: 59, class: "8B", address: "24 Uttarpara Station Rd, Hooghly" }
];

const containerOfData = document.getElementById("card-container");
const searchBox = document.getElementById("search-box");
const searchBtn = document.getElementById("search-btn");

function renderStudent (students){
    containerOfData.innerHTML = students.map((students) => `
       <div class= "card">
            <h4>Student Name: <span>${students.name}</span></h4>
            <p>Marks: <span>${students.marks}</span></p>
            <p>Class: <span>${students.class}</span></p>
            <p>Address: <span>${students.address}</span></p>
       </div> 
    `).join("");
};

renderStudent(students)


searchBtn.addEventListener("click",() => {
    const query = searchBox.value.toLowerCase().trim();

    const filteredStudentData = students.filter((students) => {
        return (
            students.name.toLowerCase().includes(query) || students.marks.toString().includes(query) || students.class.toLowerCase().includes(query) || students.address.toLowerCase().includes(query)
        );
    });
    renderStudent(filteredStudentData)
});