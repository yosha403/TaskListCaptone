using Dapper;
using MySqlConnector;
using System;
using System.Collections.Generic;
using System.Linq;

namespace TaskListCapstone.Models
{
    public class TaskDAL
    {
        public List<Task> GetTasks()
        {
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                string sql = "select * from tasks";
                connect.Open();
                List<Task> output = connect.Query<Task>(sql).ToList();
                connect.Close();
                return output;
            }
        }
        public Task GetTask(int id)
        {
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                List<Task> output = GetTasks();
                Task match;
                try
                {
                    match = output.Where(m => m.Id == id).First();
                }
                catch (InvalidOperationException)
                {
                    match = new Task();
                    match.TaskName = $"Task at index{id} doen't exist. Please try another";
                }
                return match;
            }
        }
    }
}
