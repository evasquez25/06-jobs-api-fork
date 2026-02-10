import { enableInput, message, token } from "./index.js";
import { showJobs } from "./jobs.js";

export const handleDelete = async (id) => {  
    enableInput(false);
    const method = "DELETE";
    const url = `/api/v1/jobs/${id}`;

    try {
        const response = await fetch(url, {
        method: method,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        }
        });

        const data = await response.json();
        if (response.status === 200) {
        message.textContent = "The job entry was deleted.";
        showJobs();
        } else {
        message.textContent = data.msg;
        }
    } catch (err) {
        console.log(err);
        message.textContent = "A communication error occurred.";
    }
    enableInput(true);
};
