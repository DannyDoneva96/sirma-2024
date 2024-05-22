function checkAdmission(score, extracurriculars) {
    if (score >= 90) {
        console.log("Admitted to the university.")
    } else if (score >= 80 && extracurriculars >= 2) {
        console.log("Admitted")
    } else {
        console.log("Not admitted")
}

}
checkAdmission(85,3)