
# Created grader to convert numerical grades to letter grades
def grader(gradeInput):
    grade = "Invalid Input!"

    if gradeInput >= 90:
        grade = "A"
    elif gradeInput >= 80:
        grade = "B"  
    elif gradeInput >= 70:
        grade = "C"
    elif gradeInput >= 60:
        grade = "D"
    elif gradeInput >= 50:
        grade = "F" 
       
    return grade

#asking user for information
print("What is the student's name?")
name = input()
print("What is the assignment name?")
assignment = input()
print("What is the numerical grade?")
gradeInput = int(float(input()))
letterGrade= grader(gradeInput)

if letterGrade != "Invalid Input!":
   print(name+" got a/an "+ letterGrade +" on "+ assignment+"!")  
else:
       print("Invalid Input! Please try again!")         
