

//Program manage Student
//Declare object Student
var Student = {
    data : [],
    viewStudent : function(){
        //View list student
        var listStudent = this.data;

        //Repeat and view list student
        for(var i = 0; i < listStudent.length; i++){
            document.write('<div>'+ listStudent[i].id +
            '|'+ listStudent[i].name +
            '|' +listStudent[i].email +'</div>');
        }

    },
    addStudent : function(id,name, email){
        //Add student
        var item = {
            id: id,
            name: name,
            email: email
        }
        //add student
        this.data.push(item);
    },
    removeStudent : function(id){
        //remove student
        //repeate list student to find and remove
        for(var i = 0; i < this.data.length; i++){//if student need remove
            this.data.splice(i,1);//remove
        }
    },
    editStudent : function(id, name, email){
        //Edit student
        //Find student need edit
        for(var i = 0; i < this.data.length; i++){
            if(this.data[i].id === id){
                this.data[i].name = name;
                this.data[i].email = email;
            }
        }
    }
}

document.write('<h4>List Student before </h4>');
Student.viewStudent();
 
document.write('<h4>List Student after add 02 student </h4>');
Student.addStudent("sv001", 'Nguyễn Văn Hoang', "nguyenhoang@gmail.com");
Student.addStudent("sv002", 'Vũ Thị Hanh', "vuthihanh@gmail.com");
Student.viewStudent();
 
document.write('<h4>List Student after remove a student</h4>');
Student.removeStudent('sv001');
Student.viewStudent();
 
document.write('<h4>List Student after edit </h4>');
Student.editStudent('sv002', "New student", "vuthiHa@gmail.com");
Student.viewStudent();