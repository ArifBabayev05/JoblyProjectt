
export const kanbanData = [
    {
        Id: "Task 1",
        Title: "Task - 29001",
        Status: "Evaluated",
        Summary: "Amazon Basics 3-in-1",
        Type: "Story",
        Priority: "Low",
        Tags: "Analyze,Customer",
        Estimate: 3.5,
        Assignee: "Nancy Davloio",
        RankId: 1,
        Color: "#02897B",
        ClassName: "e-story, e-low, e-nancy-davloio",
    },
    {
        Id: "Task 2",
        Title: "Task - 29001",
        Status: "Testing",
        Summary: "Chase Ink Business Cash",
        Type: "Story",
        Priority: "Low",
        Tags: "Analyze,Customer",
        Estimate: 3.5,
        Assignee: "Nancy Davloio",
        RankId: 1,
        Color: "#02897B",
        ClassName: "e-story, e-low, e-nancy-davloio",
    },

];

export const kanbanGrid = [
    { headerText: "Evaluated", keyField: "Evaluated", allowToggle: true },

    { headerText: "Contact Established", keyField: "Contact Established", allowToggle: true },

    {
        headerText: "Meet Starting",
        keyField: "Testing",
        allowToggle: true,
        isExpanded: false,
    },

    { headerText: "Take Offer", keyField: "Take Offer", allowToggle: true },

];