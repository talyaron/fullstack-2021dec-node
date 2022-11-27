SELECT a.first_name, a.last_name, b.title
FROM student as a
JOIN students_classes as c
ON a.student_id = c.student_id
JOIN classes as b
on b.class_id = c.class_id;