using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using TaskListCapstone.Models;

namespace TaskListCapstone.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TaskController
    {
        TaskDAL db = new TaskDAL();

        [HttpGet]
        public List<Task> GetTasks()
        {
            return db.GetTasks();
        }

        [HttpGet("get/{id}")]
        public Task GetTask(int id)
        {
            return db.GetTask(id);
        }
        [HttpPost("makeNew")]
        public void PostMovie(Task t)
        {
            db.InsertTask(t);
        }

        [HttpDelete("delete/{id}")]
        public void DeleteTask(int id)
        {
            db.DeleteTask(id);
        }
        [HttpPut("update/{id}")]       
        public void UpdateTask(int id, Task t)
        {
            Task original = db.GetTask(id);
            if (t.TaskName== null || t.TaskName == "")
            {
                t.TaskName = original.TaskName;
            }
            if (t.TaskDescription == null || t.TaskDescription == "")
            {
                t.TaskDescription = original.TaskDescription;
            }
            if (t.AssignedTo == null || t.AssignedTo == "")
            {
                t.AssignedTo = original.AssignedTo;
            }
            if (t.DueDate == null)
            {
                t.DueDate = original.DueDate;
            }
            //if (t.IsCompleted == "")
            //{
            //    t.DueDate = original.DueDate;
            //}
            db.UpdateTask(id, t);
        }
    }
}
