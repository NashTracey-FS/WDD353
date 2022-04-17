
#Method to convert Grades
  def grader(input)
    if input >= 90
        grade = "A"
    elsif input >= 80
        grade = "B"
    elsif input >= 70
        grade = "C"
    elsif input >= 60
        grade = "D"
    else
        grade = "F"
    end

    grade
end
#     # Getting information from user
  
   puts "What's the students name?"
   name = gets.chomp()
   puts "What's the assignment name?"
   assignment = gets.chomp()
   puts "What is the numerical grade?"
   number = gets.chomp()
    grade = grader(number.to_f)
    puts (name+" got a/an "+grade+" on "+assignment+"!"   )

   

