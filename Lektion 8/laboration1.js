function Kurs(kursnamn, teacher, points, grade, done) {
    this.kursnamn = kursnamn;
    this.teacher = teacher;
    this.points = points;
    this.grade = grade;
    this.done = done;
}
let kurser = [javascript1, javascript2, HTML, css];

let javascript1 = new Kurs("Javascript", "Mahmud Al Hakim", 40, "VG", true);
let javascript2 = new Kurs("Javascript2", "Mahmud Al Hakim", 40, "VG", true);
let HTML = new Kurs("HTML", "Mahmud Al Hakim", 40, "G", false);
let css = new Kurs("CSS", "Mahmud Al Hakim", 40, "G", false);