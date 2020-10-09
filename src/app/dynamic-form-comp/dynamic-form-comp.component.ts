import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-dynamic-form-comp",
  templateUrl: "./dynamic-form-comp.component.html",
  styleUrls: ["./dynamic-form-comp.component.css"],
})
export class DynamicFormCompComponent implements OnInit {
  schoolForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.schoolForm = this.createFormItem("init");
  }
  /*** Get Class Rooms ***/
  getclassRoom(): FormArray {
    return this.schoolForm.get("classRooms") as FormArray;
  }

  /***** Add class Room  *****/
  addClassRoom() {
    this.getclassRoom().push(this.createFormItem("classRoom"));
  }

  /***** Remove class Room  *****/
  removeClassRoom(classRoomIndex: number) {
    this.getclassRoom().removeAt(classRoomIndex);
  }

  /********* Get subject ***********/
  getSubject(classRoomIndex: number): FormArray {
    return this.getclassRoom().at(classRoomIndex).get("subjects") as FormArray;
  }

  /***** Add subject  *****/
  addsubject(classRoomIndex: number) {
    // this.getSubject().push(this.createFormItem("subject"));
    this.getSubject(classRoomIndex).push(this.createFormItem("subject"));
  }

  /***** Remove subject *****/

  removeSubject(classRoomIndex: number, subjectIndex: number) {
    // this.getSubject().removeAt(classSubjectIndex);
    this.getSubject(classRoomIndex).removeAt(subjectIndex);
  }

  ngOnInit() {}

  createFormItem(itemType: string): FormGroup {
    let FormItem = this.fb.group({});
    switch (itemType) {
      case "init":
        FormItem = this.fb.group({
          schoolName: "",
          totalStudentsCount: "",
          classRooms: this.fb.array([]),
        });
        break;
      case "classRoom":
        FormItem = this.fb.group({
          studentsCount: "",
          classRoomNumber: "",
          subjects: this.fb.array([]),
        });
        break;
      case "subject":
        FormItem = this.fb.group({
          subjectname: "",
          studentscount: "",
        });
        break;
    }
    return FormItem;
  }
}
